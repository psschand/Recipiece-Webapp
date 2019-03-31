import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Constants} from '../../classes/constants';
import {UserPreferencesService} from '../user-preferences/user-preferences.service';
import {map, switchMap} from 'rxjs/operators';
import {ApiService} from '../api-service';
import {Recipe} from 'recipiece-common';

@Injectable({
  providedIn: 'root',
})
export class RecipesService extends ApiService {

  constructor(
    httpClient: HttpClient,
    preferencesService: UserPreferencesService,
  ) {
    super(httpClient, preferencesService);
  }

  public getRecipes(pageIndex: number): Observable<Recipe[]> {
    const url = `${Constants.API_URLS.GET_RECIPES}/${this.preferenceService.userId}/${pageIndex}`;
    return this.httpClient.get(url, this.getHeaders())
      .pipe(
        map((result: Recipe[]) => {
          return result;
        }),
      );
  }

  public saveRecipe(recipe: Recipe): Observable<Recipe> {
    const url = `${Constants.API_URLS.CREATE_RECIPE}`;
    if (recipe.id !== '') {
      // updating the recipe
      return this.httpClient.put(url, recipe.serialize(), this.getHeaders())
        .pipe(
          switchMap(() => {
            return of(recipe);
          }),
        );
    } else {
      // creating the recipe
      return this.httpClient.post(url, recipe.serialize(), this.getHeaders())
        .pipe(
          switchMap((result: HttpResponse<any>) => {
            // @TODO -- set the id of the recipe
            return of(recipe);
          }),
        );
    }
  }
}
