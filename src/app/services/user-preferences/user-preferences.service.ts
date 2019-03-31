import {Injectable} from '@angular/core';
import {isNullOrUndefined} from '../../classes/utilities';

export type UserTheme = 'dark-theme' | 'light-theme';

export const PREFERENCE_KEY_THEME = 'theme';
export const PREFERENCE_KEY_TOKEN = 'token';
export const PREFERENCE_KEY_USER_ID = 'userid';

@Injectable({
  providedIn: 'root',
})
export class UserPreferencesService {
  private persistentStorage: Storage;
  private transientStorage: Storage;

  public get userId(): string {
    return this.persistant ?
      this.persistentStorage.getItem(PREFERENCE_KEY_USER_ID) :
      this.transientStorage.getItem(PREFERENCE_KEY_USER_ID);
  }

  public set userId(userId: string) {
    if (this.persistant) {
      this.persistentStorage.setItem(PREFERENCE_KEY_USER_ID, userId);
    } else {
      this.transientStorage.setItem(PREFERENCE_KEY_USER_ID, userId);
    }
  }

  public get theme(): UserTheme {
    return (this.persistentStorage.getItem(PREFERENCE_KEY_THEME) as UserTheme) || 'light-theme';
  }

  public set theme(theme: UserTheme) {
    this.persistentStorage.setItem(PREFERENCE_KEY_THEME, theme);
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(theme);
  }

  public get persistant(): boolean {
    return !!this.persistentStorage.getItem(PREFERENCE_KEY_TOKEN);
  }

  public set persistant(persist: boolean) {
    if (persist && !this.persistant) {
      this.persistentStorage.setItem(PREFERENCE_KEY_TOKEN, this.transientStorage.getItem(PREFERENCE_KEY_TOKEN));
      this.transientStorage.removeItem(PREFERENCE_KEY_TOKEN);
    } else if (!persist && this.persistant) {
      this.transientStorage.setItem(PREFERENCE_KEY_TOKEN, this.persistentStorage.getItem(PREFERENCE_KEY_TOKEN));
      this.persistentStorage.removeItem(PREFERENCE_KEY_TOKEN);
    }
  }

  public get token(): string | null {
    return this.persistant ?
      this.persistentStorage.getItem(PREFERENCE_KEY_TOKEN) :
      this.transientStorage.getItem(PREFERENCE_KEY_TOKEN);
  }

  public set token(token: string) {
    if (this.persistant) {
      this.persistentStorage.setItem(PREFERENCE_KEY_TOKEN, token);
    } else {
      this.transientStorage.setItem(PREFERENCE_KEY_TOKEN, token);
    }
  }

  public get hasSession(): boolean {
    return !isNullOrUndefined(this.persistentStorage.getItem(PREFERENCE_KEY_TOKEN)) ||
      !isNullOrUndefined(this.transientStorage.getItem(PREFERENCE_KEY_TOKEN));
  }

  constructor() {
    this.persistentStorage = localStorage;
    this.transientStorage = sessionStorage;
  }

  public logoutUser() {
    const handler = this.persistant ? this.persistentStorage : this.transientStorage;
    handler.removeItem(PREFERENCE_KEY_TOKEN);
    handler.removeItem(PREFERENCE_KEY_USER_ID);
    handler.removeItem(PREFERENCE_KEY_THEME);
  }

}
