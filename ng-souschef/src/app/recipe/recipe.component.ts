import { Component, OnInit, Input } from '@angular/core';
import { Recipe, IngredientSection } from '../recipe';
import { RecipeService } from '../recipe.service';
import { Timer } from '../timer';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent implements OnInit {
  @Input() dataId: string;
  recipe: Recipe;
  timers: Timer[];
  stepTimer: number;
  sections: IngredientSection[];

  constructor(private api: RecipeService, private timer: TimerService) { }

  ngOnInit() {
    this.api.getRecipe(this.dataId).subscribe((recipe) => {
      this.recipe = recipe;

      this.sections = this.getIngredientSections();

      this.timers = this.recipe.steps.map((stepText: string): Timer => {
        var newTimer: Timer = { time: 0, description: '' };

        var matches = /(?:\.|,)(?: and )?\s*([a-zA-Z\s]+)(?:[0-9]+-|[0-9]+ to )?([0-9]+) (hour|minute|second)/.exec(stepText);
        if (matches) {
          newTimer.description = matches[1];
          switch (matches[3]) {
            case 'hour':
              newTimer.time = parseInt(matches[2]) * 3600;
              break;
            case 'minute':
              newTimer.time = parseInt(matches[2]) * 60;
              break;
            case 'second':
              newTimer.time = parseInt(matches[2]);
              break;
          }
        }
        return newTimer;

      });
    });
  }

  private getIngredientSections(): IngredientSection[] {
    if (!this.recipe.ingredientSections || (this.recipe.ingredientSections.length == 0)) {
      return [{
        label: null,
        ingredients: this.recipe.ingredients
      }];
    }
    else {
      return this.recipe.ingredientSections.map((section, i) => {
        var nextIndex: number = (this.recipe.ingredientSections.length-1 == i) ?
          this.recipe.ingredients.length :
          this.recipe.ingredientSections[i+1].index;

        return {
          label: section.label,
          ingredients: this.recipe.ingredients.slice(section.index, nextIndex)
        };
      });
    }
  }

  close() {
    this.api.unloadRecipe(this.recipe.id);
  }

  addTimer(seconds: Timer) {
    this.timer.add(seconds);
  }
}
