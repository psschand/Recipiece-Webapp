import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../services/search/search.service';
import {Router} from '@angular/router';
import {Constants} from '../../classes/constants';
import {UsersService} from '../../services/users/users.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public searchQuery: string;

  public get showSearchBar(): boolean {
    return Constants.ROUTES.SEARCHABLE_ROUTES.includes(this.router.url);
  }

  constructor(
    private searchService: SearchService,
    private userService: UsersService,
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  public logoutUserPressed() {
    this.userService.logoutUser()
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate([Constants.ROUTES.LOGIN]);
      });
  }

  public searchQueryChanged() {
    this.searchService.notifyListeners(this.searchQuery);
  }

}
