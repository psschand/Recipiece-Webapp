import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IRecipe} from '../../../classes/models';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: IRecipe;
  @Output() editPressed: EventEmitter<IRecipe>;
  @Output() viewPressed: EventEmitter<IRecipe>;
  @Output() deletePressed: EventEmitter<IRecipe>;

  constructor() { }

  ngOnInit() {
  }

}
