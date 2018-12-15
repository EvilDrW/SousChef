import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RecipeService } from '../recipe.service';
import { RecipeSummary } from '../recipe';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-select-recipe-modal',
  templateUrl: './select-recipe-modal.component.html',
  styleUrls: ['./select-recipe-modal.component.css']
})
export class SelectRecipeModalComponent implements OnInit {
  recipes: RecipeSummary[];

  @ViewChild('recipeSelectContent')
  private modalRef: TemplateRef<any>;

  constructor(private api: RecipeService, private modalService: NgbModal, private modalControl: ModalService) {
    this.modalControl.selectRecipe.subscribe((val) => {
      if (val === 'open') {
        this.modalService.open(this.modalRef, { size: 'lg' });
      }
    })
  }

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

  select(id: string) {
    this.api.loadRecipe(id);
  }
}
