import {Component, OnInit} from '@angular/core';
import {UserPreferencesService} from './services/user-preferences/user-preferences.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public sidenavOpen: boolean;

  constructor(
    private prefsService: UserPreferencesService,
  ) {
    this.sidenavOpen = this.prefsService.hasSession;
  }

  public toggleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
  }

  ngOnInit(): void {
    document.body.classList.add(this.prefsService.theme);
  }

}
