import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http: HttpClient) { }

  private loadIngredientDatabase(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>('./assets/ingredients.json');
  }

  getIngredient(id: string): Observable<Ingredient> {
    return this.loadIngredientDatabase().pipe(
      map((data) => {
        let outputData: Ingredient[] = data.filter((r) => {
          return r.id == id;
        });

        if (outputData.length == 1) {
          return outputData[0];
        }

        return null;
      })
    );
  }

  getPantry(): Observable<Ingredient[]> {
    return this.loadIngredientDatabase();
  }
}
