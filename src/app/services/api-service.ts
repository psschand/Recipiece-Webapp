import {UserPreferencesService} from './user-preferences/user-preferences.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class ApiService {
  constructor(
    protected httpClient: HttpClient,
    protected preferenceService: UserPreferencesService,
  ) {
  }

  protected getHeaders(useAuth: boolean = true): { headers: HttpHeaders } {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    if (useAuth) {
      headers['Authorization'] = `Bearer: ${this.preferenceService.token}`;
    }
    return {
      headers: new HttpHeaders(headers),
    };
  }
}
