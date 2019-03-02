import {Component, OnInit} from '@angular/core';
import {Constants} from '../../../classes/constants';
import {UserPreferencesService} from '../../../services/user-preferences/user-preferences.service';
import {Router} from '@angular/router';
import {UsersService} from '../../../services/users/users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public username: string;
  public password: string;
  public stayLoggedIn: boolean;
  public showLoginError: boolean;

  public readonly routes = Constants.ROUTES;

  constructor(
    private preferenceService: UserPreferencesService,
    private usersService: UsersService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    if (this.preferenceService.hasSession) {
      this.router.navigate([Constants.ROUTES.COOKBOOK]);
    }
  }

  public usernameChanged() {
    this.showLoginError = false;
  }

  public passwordChanged() {
    this.showLoginError = false;
  }

  public loginPressed() {
    this.preferenceService.persistant = this.stayLoggedIn;
    this.usersService.loginUser(this.username, this.password)
      .subscribe(() => {
        this.router.navigate([Constants.ROUTES.COOKBOOK]);
      }, (error: Error) => {
        this.showLoginError = true;
      });
  }
}
