import { Injectable } from '@angular/core';
import { Recipe, RecipeSummary } from './recipe';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// eventually we'll use the indexed db crap here, but for now we'll just use the local data
export class RecipeService {
  openRecipes: string[] = [];

  constructor(private http: HttpClient) { }

  private loadRecipeDatabase(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('./assets/recipes.json');
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.loadRecipeDatabase().pipe(map((data) => {
      let outputData: Recipe[] = data.filter((r) => {
        return r.id == id;
      });

      if ((outputData.length == 0) || (outputData.length > 1)) {
        return null;
      }

      return outputData[0];
    }));
  }

  getRecipeNames(): Observable<RecipeSummary[]> {
    return this.loadRecipeDatabase().pipe(map((data) => {
      return data.map((r) => {
        return {
          title: r.title,
          id: r.id
        };
      });
    }));
  }

  loadRecipe(id: string) {
    this.loadRecipeDatabase().subscribe((data) => {
      let selection: Recipe[] = data.filter((r) => r.id == id);

      if (selection.length == 1) {
        this.openRecipes.push(selection[0].id);
      }
    });
  }

  unloadRecipe(id: string) {
    this.openRecipes = this.openRecipes.filter((r) => id != r);
  }
}
