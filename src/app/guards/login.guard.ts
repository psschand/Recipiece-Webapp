import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserPreferencesService} from '../services/user-preferences/user-preferences.service';
import {Constants} from '../classes/constants';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(
    private preferenceService: UserPreferencesService,
    private router: Router,
  ) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.preferenceService.hasSession) {
      return true;
    }
    this.router.navigate([Constants.ROUTES.LOGIN]);
    return false;
  }
}
