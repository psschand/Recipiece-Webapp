import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from '../../classes/models';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {UserPreferencesService} from '../user-preferences/user-preferences.service';
import {Constants} from '../../classes/constants';
import {tap} from 'rxjs/operators';
import {ApiService} from '../api-service';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends ApiService {
  private token?: string;

  constructor(
    client: HttpClient,
    preferencesService: UserPreferencesService,
  ) {
    super(client, preferencesService);
  }

  public loginUser(username: string, password: string): Observable<any> {
    const body = {
      username,
      password,
    };
    return this.httpClient.post(Constants.API_URLS.LOGIN_USER, body, this.getHeaders(false))
      .pipe(
        tap((result: any) => {
          const {token, id} = result;
          this.preferenceService.token = token;
          this.preferenceService.userId = id;
        }),
      );
  }

  public logoutUser(): Observable<any> {
    return this.httpClient.post(Constants.API_URLS.LOGOUT_USER, {id: this.preferenceService.userId}, this.getHeaders())
      .pipe(
        tap(() => {
          this.preferenceService.token = null;
          this.preferenceService.userId = null;
        }),
      );
  }

  public createUser(user: IUser): Observable<any> {
    return this.httpClient.post(Constants.API_URLS.CREATE_USER, user, this.getHeaders(false))
      .pipe(
        tap((result: any) => {
          const {token, id} = result;
          this.preferenceService.token = token;
          this.preferenceService.userId = id;
        }),
      );
  }

  // public updateUser(newUser: IUser): Observable<IUser> {
  //
  // }
}
