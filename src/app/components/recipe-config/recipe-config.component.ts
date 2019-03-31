import {Component, OnInit, ViewChild} from '@angular/core';
import {MatHorizontalStepper} from '@angular/material';
import {Recipe} from 'recipiece-common';
import {Constants} from '../../classes/constants';
import {RecipesService} from '../../services/recipes/recipes.service';
import {Router} from '@angular/router';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'app-recipe-config',
  templateUrl: './recipe-config.component.html',
  styleUrls: ['./recipe-config.component.scss'],
})
export class RecipeConfigComponent implements OnInit {
  @ViewChild('stepper') matStepper: MatHorizontalStepper;
  public fromUrl: boolean;
  public recipe: Recipe;

  constructor(
    private recipeService: RecipesService,
    private router: Router,
    private logger: NGXLogger,
  ) {
  }

  ngOnInit() {
    this.recipe = new Recipe();
  }

  public saveRecipe() {
    this.recipeService.saveRecipe(this.recipe)
      .subscribe(() => {
        this.router.navigate([Constants.ROUTES.COOKBOOK]);
      }, (error: Error) => {
        this.logger.error(error);
      });
  }

}
