import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeCardComponent} from './recipe-card/recipe-card.component';
import {LoadingBarComponent} from './loading-bar/loading-bar.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    RecipeCardComponent,
    LoadingBarComponent,
  ],
  exports: [
    RecipeCardComponent,
    LoadingBarComponent,
  ],
})
export class SharedModule {
}
