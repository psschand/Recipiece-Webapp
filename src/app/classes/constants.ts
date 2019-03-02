import {environment} from '../../environments/environment';

class Routes {
  public static readonly COOKBOOK = 'cookbook';
  public static readonly SETTINGS = 'settings';
  public static readonly RECIPE_CONFIG = 'recipe';
  public static readonly LOGIN = 'login';

  public static SEARCHABLE_ROUTES = [
    Routes.COOKBOOK,
  ];
}

class ApiUrls {
  public static readonly ROOT = environment.apiUrl;
  public static readonly USERS = `${ApiUrls.ROOT}/users`;
  public static readonly CREATE_USER = `${ApiUrls.USERS}/`;
  public static readonly LOGIN_USER = `${ApiUrls.USERS}/login`;
  public static readonly LOGOUT_USER = `${ApiUrls.USERS}/logout`;
  public static readonly DELETE_USER = `${ApiUrls.USERS}/`;
  public static readonly UPDATE_USER = `${ApiUrls.USERS}/`;

  public static readonly RECIPES = `${ApiUrls.ROOT}/recipes`;
  public static readonly CREATE_RECIPE = `${ApiUrls.RECIPES}/`;
}

class Regexes {
  public static readonly USERNAME = /^[A-Za-z0-9_-]+$/;
  // tslint:disable-next-line:max-line-length
  public static readonly EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public static readonly INGREDIENT_MEASUREMENT_REGEX = /(\d+[\/\d. ]*|\d)/;
}

export class Constants {
  public static readonly ROUTES = Routes;
  public static readonly API_URLS = ApiUrls;
  public static readonly REGEXES = Regexes;
}
