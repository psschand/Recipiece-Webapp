import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserPreferencesService} from '../user-preferences/user-preferences.service';
import {Constants} from '../../classes/constants';
import {tap} from 'rxjs/operators';
import {ApiService} from '../api-service';
import {IUser} from 'recipiece-common';

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
          const {token, user} = result.data;
          this.preferenceService.token = token;
          this.preferenceService.userId = user;
        }),
      );
  }

  public logoutUser(): Observable<any> {
    const headers = this.getHeaders();
    headers.headers.set('accept', 'text/plain');
    return this.httpClient.post(Constants.API_URLS.LOGOUT_USER, {id: this.preferenceService.userId}, headers)
      .pipe(
        tap(() => {
          this.preferenceService.logoutUser();
        }),
      );
  }

  public createUser(user: Partial<IUser>): Observable<any> {
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
