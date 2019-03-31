import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeConfigComponent} from './recipe-config.component';

const routes: Routes = [
  {
    path: '',
    component: RecipeConfigComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeConfigRoutingModule {
}
