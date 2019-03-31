import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchService} from '../../services/search/search.service';
import {Router} from '@angular/router';
import {Constants} from '../../classes/constants';
import {UsersService} from '../../services/users/users.service';
import {take} from 'rxjs/operators';
import {UserPreferencesService} from '../../services/user-preferences/user-preferences.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public searchQuery: string;
  @Output() toggleSidenavPressed: EventEmitter<void>;

  public get showSearchBar(): boolean {
    return Constants.ROUTES.SEARCHABLE_ROUTES.some((searchableRoute: string) => {
      return this.router.url.indexOf(searchableRoute) !== -1;
    });
  }

  constructor(
    public prefsService: UserPreferencesService,
    private searchService: SearchService,
    private userService: UsersService,
    private router: Router,
  ) {
    this.toggleSidenavPressed = new EventEmitter();
  }

  ngOnInit() {
  }

  public menuPressed() {
    this.toggleSidenavPressed.emit();
  }

  public searchQueryChanged() {
    this.searchService.notifyListeners(this.searchQuery);
  }

}
