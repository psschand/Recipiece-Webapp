import {Component, Input, OnInit} from '@angular/core';
import {RecipesService} from '../../../services/recipes/recipes.service';
import {Router} from '@angular/router';
import {Constants} from '../../../classes/constants';
import {NGXLogger} from 'ngx-logger';
import {Recipe} from 'recipiece-common';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(
    private recipeService: RecipesService,
    private router: Router,
    private logger: NGXLogger,
  ) {
  }

  ngOnInit() {
  }

  public addStepPressed() {
    this.recipe.steps.push('');
  }

  public removeStepPressed(index: number) {
    this.recipe.steps.splice(index, 1);
  }

  public trackByFcn(index) {
    return index;
  }
}
