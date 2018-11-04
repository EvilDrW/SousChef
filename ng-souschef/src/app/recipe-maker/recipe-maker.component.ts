import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-maker',
  templateUrl: './recipe-maker.component.html',
  styleUrls: ['./recipe-maker.component.css']
})
export class RecipeMakerComponent implements OnInit {
  data: Recipe;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
     this.data = new Recipe();
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((something) => {

    });
  }

  addIngredient() {
    this.data.ingredients.push({ id: '', quantity: 0, unit: '', notes: '' });
  }

}
