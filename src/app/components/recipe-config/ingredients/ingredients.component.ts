import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IngredientFormValidityEvent} from './ingredient-entry/ingredient-entry.component';
import {Recipe} from 'recipiece-common';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeChanged: EventEmitter<Recipe>;
  private formValidities: boolean[];

  public get isValid(): boolean {
    return this.recipe.ingredients.length === 0 ||
      !this.formValidities.some((valid: boolean) => valid === false);
  }

  constructor() {
    this.recipeChanged = new EventEmitter();
  }

  public addIngredientPressed() {
    this.formValidities.push(false);
    this.recipe.ingredients.push({name: '', amount: '', measure: ''});
  }

  ngOnInit() {
    this.formValidities = this.recipe.ingredients.map(() => true);
  }

  public handleFormValidityChanged(event: IngredientFormValidityEvent) {
    const {formValid, index} = event;
    this.formValidities[index] = formValid;
  }

  public handleDeleteIngredientPressed(ingIndex: number) {
    this.recipe.ingredients.splice(ingIndex, 1);
    this.formValidities.splice(ingIndex, 1);
  }

  public trackByFcn(index) {
    return index;
  }
}
