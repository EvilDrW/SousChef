import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeComponent } from './recipe/recipe.component';
import { SelectRecipeModalComponent } from './select-recipe-modal/select-recipe-modal.component';
import { RecipeCollectionComponent } from './recipe-collection/recipe-collection.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { UnitComponent } from './unit/unit.component';
import { TimerComponent } from './timer/timer.component';
import { RecipeMakerComponent } from './recipe-maker/recipe-maker.component';
import { UnitSelectComponent } from './unit-select/unit-select.component';
import { IngredientSelectComponent } from './ingredient-select/ingredient-select.component';
import { ElapsedTimePipe } from './elapsed-time.pipe';
import { TimerCollectionComponent } from './timer-collection/timer-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    SelectRecipeModalComponent,
    RecipeCollectionComponent,
    IngredientComponent,
    UnitComponent,
    TimerComponent,
    RecipeMakerComponent,
    UnitSelectComponent,
    IngredientSelectComponent,
    ElapsedTimePipe,
    TimerCollectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
