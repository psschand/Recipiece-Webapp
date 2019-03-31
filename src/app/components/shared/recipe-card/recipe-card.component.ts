import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IRecipe} from 'recipiece-common';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: IRecipe;
  @Output() editPressed: EventEmitter<IRecipe>;
  @Output() viewPressed: EventEmitter<IRecipe>;
  @Output() deletePressed: EventEmitter<IRecipe>;

  constructor() {
    this.editPressed = new EventEmitter();
    this.viewPressed = new EventEmitter();
    this.deletePressed = new EventEmitter();
  }

  ngOnInit() {
  }

}
