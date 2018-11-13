import { RecipeIngredient } from './ingredient';

export class Recipe {
	id: string = '';
	title: string = '';
	notes: string = '';
	steps: string[] = [];
  servings: {
    min: number;
    max: number;
  } = { min: 0, max: 0 };
  source: {
    name: string;
    month: number;
    year: number;
  } = { name: '', month: 0, year: 0 };
	ingredients: RecipeIngredient[] = [];
	ingredientSections: {
	  index: number;
	  label: string;
	}[] = [];
}

export class RecipeSummary {
  id: string;
  title: string;
}

export class IngredientSection {
  label: string;
  ingredients: RecipeIngredient[];
}
