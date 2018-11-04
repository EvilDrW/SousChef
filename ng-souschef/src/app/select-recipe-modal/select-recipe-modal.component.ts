import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RecipeService } from '../recipe.service';
import { RecipeSummary } from '../recipe';

@Component({
  selector: 'app-select-recipe-modal',
  templateUrl: './select-recipe-modal.component.html',
  styleUrls: ['./select-recipe-modal.component.css']
})
export class SelectRecipeModalComponent implements OnInit {
  recipes: RecipeSummary[];

  constructor(private api: RecipeService, private modalService: NgbModal) { }

  ngOnInit() {
    this.api.getRecipeNames().subscribe((data) => {
      this.recipes = data.sort((a,b) => {
        if (a.title < b.title) {
          return -1;
        }
        else {
          return 1;
        }
      })
    });
  }

  open(content) {
    this.modalService.open(content).result.then((something) => {

    });
  }

  select(id: string) {
    this.api.loadRecipe(id);
  }
}
