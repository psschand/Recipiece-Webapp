import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RecipeConfigRoutingModule} from './recipe-config-routing.module';
import {UrlEntryComponent} from './url-entry/url-entry.component';
import {DescriptionComponent} from './description/description.component';
import {IngredientsComponent} from './ingredients/ingredients.component';
import {StepsComponent} from './steps/steps.component';
import {RecipeConfigComponent} from './recipe-config.component';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {IngredientEntryComponent} from './ingredients/ingredient-entry/ingredient-entry.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RecipeConfigRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatExpansionModule,
  ],
  declarations: [
    UrlEntryComponent,
    DescriptionComponent,
    IngredientsComponent,
    StepsComponent,
    RecipeConfigComponent,
    IngredientEntryComponent,
  ],
})
export class RecipeConfigModule {
}
