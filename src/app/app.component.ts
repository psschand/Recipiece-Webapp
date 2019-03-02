import {Component, OnInit} from '@angular/core';
import {UserPreferencesService} from './services/user-preferences/user-preferences.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'recipiece-frontend';

  constructor(
    private prefsService: UserPreferencesService
  ) {
  }

  ngOnInit(): void {
    document.body.classList.add(this.prefsService.theme);
  }

}
