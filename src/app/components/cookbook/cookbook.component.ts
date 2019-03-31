import {Component, OnInit} from '@angular/core';
import {RecipesService} from '../../services/recipes/recipes.service';
import {PageEvent} from '@angular/material';
import {Recipe} from 'recipiece-common';
import {IRecipe} from 'recipiece-common';

// import {IRecipe, Recipe} from '../../classes/recipe-model';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.scss'],
})
export class CookbookComponent implements OnInit {
  public loading: boolean;
  public recipes: any[];
  private currentPage: number;

  constructor(
    private recipeService: RecipesService,
  ) {
  }

  ngOnInit() {
    this.currentPage = 1;
    this.fetchRecipes();
  }

  public fetchRecipesForPage(pageEvent: PageEvent) {
    this.currentPage = pageEvent.pageIndex + 1;
    this.fetchRecipes();
  }

  private fetchRecipes() {
    this.loading = true;
    const subscription = this.recipeService.getRecipes(this.currentPage)
      .subscribe((result: Recipe[]) => {
        this.recipes = result;
        this.loading = false;
        if (!!subscription) {
          subscription.unsubscribe();
        }
      });
  }

  private handleEditRecipe(recipe: IRecipe) {

  }

  private handleDeleteRecipePressed(recipe: IRecipe) {

  }

}
