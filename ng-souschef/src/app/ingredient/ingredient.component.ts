import { Component, OnInit, Input } from '@angular/core';
import { RecipeIngredient, Ingredient } from '../ingredient';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  @Input() data: RecipeIngredient;
  ingredient: Ingredient;

  constructor(private api: IngredientService) { }

  ngOnInit() {
    this.api.getIngredient(this.data.id).subscribe((i) => this.ingredient = i);
  }

}
