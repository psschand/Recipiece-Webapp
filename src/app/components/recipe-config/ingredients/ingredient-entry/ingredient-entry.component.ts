import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Constants} from '../../../../classes/constants';
import {NgForm} from '@angular/forms';
import {IIngredient} from 'recipiece-common';

export interface IngredientFormValidityEvent {
  index: number;
  formValid: boolean;
}

@Component({
  selector: 'app-ingredient-entry',
  templateUrl: './ingredient-entry.component.html',
  styleUrls: ['./ingredient-entry.component.scss'],
})
export class IngredientEntryComponent implements OnInit {
  @ViewChild('ingredientsForm') ingredientForm: NgForm;
  @Output() deleteIngredientPressed: EventEmitter<number>;
  @Output() validityChanged: EventEmitter<IngredientFormValidityEvent>;
  @Input() ingredient: IIngredient;
  @Input() index: number;
  public readonly ingredientAmountPattern = Constants.REGEXES.INGREDIENT_MEASUREMENT_REGEX;

  constructor() {
    this.deleteIngredientPressed = new EventEmitter();
    this.validityChanged = new EventEmitter();
  }

  ngOnInit() {
  }

  public getIngredientFieldName(field: string) {
    return `${field}-${this.index}`;
  }

  public deleteIngredient() {
    this.deleteIngredientPressed.emit(this.index);
  }

  public handleModelChanged() {
    const event: IngredientFormValidityEvent = {
      formValid: this.ingredientForm.valid,
      index: this.index,
    };
    this.validityChanged.emit(event);
  }

}
