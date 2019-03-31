import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Constants} from './classes/constants';
import {LoginGuard} from './guards/login.guard';

export const APP_ROUTES: Routes = [
  {
    path: Constants.ROUTES.COOKBOOK,
    loadChildren: './components/cookbook/cookbook.module#CookbookModule',
    canActivate: [LoginGuard],
  },
  {
    path: Constants.ROUTES.SETTINGS,
    loadChildren: './components/settings/settings.module#SettingsModule',
    canActivate: [LoginGuard],
  },
  {
    path: Constants.ROUTES.RECIPE_CONFIG,
    loadChildren: './components/recipe-config/recipe-config.module#RecipeConfigModule',
    canActivate: [LoginGuard],
  },
  {
    path: Constants.ROUTES.LOGIN,
    loadChildren: './components/login/login.module#LoginModule',
  },
  {
    path: '',
    redirectTo: Constants.ROUTES.COOKBOOK,
    pathMatch: 'full',
  },
];

@NgModule({
  exports: [RouterModule],
})
export class AppRoutingModule {
}
