import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { RecipeIngredient, Ingredient } from '../ingredient';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-ingredient-select',
  templateUrl: './ingredient-select.component.html',
  styleUrls: ['./ingredient-select.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => IngredientSelectComponent),
    multi: true
  }]
})

export class IngredientSelectComponent implements OnInit, ControlValueAccessor {
  private innerValue: string;
  private onChangeCallback: (_: any) => void = () => {};
  private onTouchedCallback: () => void = () => {};

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
  };

  getName = (i: Ingredient) => i ? i.name : '';

  get value(): any {
    return this.innerValue;
  };

  setValue(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(this.innerValue);
    }
  };

  select = (event) => {
    this.setValue(event.item.id);
  };

  writeValue(obj: any): void {
    this.setValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
}
