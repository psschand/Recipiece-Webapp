import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Constants} from '../../../classes/constants';
import {UsersService} from '../../../services/users/users.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.scss'],
})
export class SidebarListComponent implements OnInit {
  @Input() longForm: boolean;
  @Output() navToggled = new EventEmitter();

  constructor(
    private router: Router,
    private userService: UsersService,
  ) {
  }

  ngOnInit() {
  }

  public createRecipeByHandPressed() {
    this.router.navigate([Constants.ROUTES.RECIPE_CONFIG]);
  }

  public cookbookPressed() {
    this.router.navigate([Constants.ROUTES.COOKBOOK]);
  }

  public settingsPressed() {
    this.router.navigate([Constants.ROUTES.SETTINGS]);
  }

  public logoutPressed() {
    this.userService.logoutUser()
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate([Constants.ROUTES.LOGIN]);
      });
  }

}
