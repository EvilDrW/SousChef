import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Recipe } from '../recipe';
import { Unit } from '../unit';
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-recipe-maker',
  templateUrl: './recipe-maker.component.html',
  styleUrls: ['./recipe-maker.component.css']
})
export class RecipeMakerComponent implements OnInit {
  data: Recipe;
  units: Unit[];

  constructor(private modalService: NgbModal, private unitsApi: UnitService) { }

  ngOnInit() {
     this.data = new Recipe();
     this.unitsApi.getAll().subscribe((us) => this.units = us);
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  addIngredient() {
    this.data.ingredients.push({ id: '', quantity: 0, unit: '', notes: '' });
  }

  addStep() {
    this.data.steps.push('');
  }

  trackByFn(index: any, item: any) {
    return index;
  }
}
