import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../services/users/users.service';
import {IUser} from '../../../classes/models';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Constants} from '../../../classes/constants';
import {HttpErrorResponse} from '@angular/common/http';
import {UserPreferencesService} from '../../../services/user-preferences/user-preferences.service';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './create-account-page.component.html',
  styleUrls: ['./create-account-page.component.scss'],
})
export class CreateAccountPageComponent implements OnInit {
  public username: string;
  public email: string;
  public password: string;
  public confirmPassword: string;
  public stayLoggedIn: boolean;

  public showNameConflictError: boolean;
  public showNameLenError: boolean;
  public showInvalidUsernameError: boolean;
  public showInvalidEmailError: boolean;
  public showEmailConflictError: boolean;
  public showPasswordLenError: boolean;
  public showPasswordMismatchError: boolean;

  constructor(
    private userService: UsersService,
    private preferenceService: UserPreferencesService,
    private logger: NGXLogger,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.username = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }

  public usernameChanged() {
    this.showInvalidUsernameError = false;
    this.showNameConflictError = false;
    this.showNameLenError = false;
  }

  public emailChanged() {
    this.showEmailConflictError = false;
    this.showInvalidEmailError = false;
  }

  public passwordChanged() {
    this.showPasswordLenError = false;
    this.showPasswordMismatchError = false;
  }

  public createAccountPressed() {
    const user: IUser = {
      name: this.username,
      email: this.email,
      password: this.password,
    };
    if (this.validate()) {
      this.preferenceService.persistant = this.stayLoggedIn;
      this.userService.createUser(user)
        .pipe(take(1))
        .subscribe(() => {
          this.router.navigate([Constants.ROUTES.COOKBOOK]);
        }, (error: HttpErrorResponse) => {
          if (error.status === 409) {
            if (error.error.conflict === 'name') {
              this.showNameConflictError = true;
            } else if (error.error.conflict === 'email') {
              this.showEmailConflictError = true;
            }
          } else {
            this.logger.error(error);
          }
        });
    }
  }

  private validate(): boolean {
    this.username = this.username.trim();
    this.email = this.email.trim();

    this.showNameLenError = this.username.trim().length < 4;
    this.showInvalidUsernameError = !this.showNameLenError && !this.username.match(Constants.REGEXES.USERNAME);
    this.showInvalidEmailError = !this.email.match(Constants.REGEXES.EMAIL);
    this.showPasswordLenError = this.password.length < 6;
    this.showPasswordMismatchError = !this.showPasswordLenError && this.password !== this.confirmPassword;

    return !(this.showNameLenError ||
      this.showInvalidUsernameError ||
      this.showInvalidEmailError ||
      this.showPasswordLenError ||
      this.showPasswordMismatchError);
  }
}
