import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from 'recipiece-common';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeChanged: EventEmitter<Recipe>;

  constructor() {
    this.recipeChanged = new EventEmitter();
  }

  ngOnInit() {
  }

  public privateChanged() {
    this.recipeChanged.emit(this.recipe);
  }

  public nameChanged() {
    this.recipeChanged.emit(this.recipe);
  }

  public descriptionChanged() {
    this.recipeChanged.emit(this.recipe);
  }

}
