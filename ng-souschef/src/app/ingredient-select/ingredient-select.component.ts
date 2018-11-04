import { Component, OnInit, Input } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { RecipeIngredient, Ingredient } from '../ingredient';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-ingredient-select',
  templateUrl: './ingredient-select.component.html',
  styleUrls: ['./ingredient-select.component.css']
})
export class IngredientSelectComponent implements OnInit {
  @Input() dataId: string;

  constructor(private api: IngredientService) { }

  ngOnInit() {
  }

  getIngredients = (text: Observable<string>) => {
    const textAndPantry = combineLatest(
      this.api.getPantry(),
      text.pipe(
        debounceTime(200),
        distinctUntilChanged()
      )
    );

    return textAndPantry.pipe(map(([pantry, text]) => {
      if (text.length < 3 || !pantry) {
        return [];
      }

      const x = new RegExp(text, 'i');

      return pantry.filter((i) => {
        return x.test(i.name);
      });
    }));
  }

  getName = (i: Ingredient) => i ? i.name : '';
}
