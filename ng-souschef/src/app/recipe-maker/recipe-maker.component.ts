import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Recipe } from '../recipe';
import { Unit } from '../unit';
import { UnitService } from '../unit.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-recipe-maker',
  templateUrl: './recipe-maker.component.html',
  styleUrls: ['./recipe-maker.component.css']
})
export class RecipeMakerComponent implements OnInit {
  data: Recipe;
  units: Unit[];

  @ViewChild('recipeMakerContent')
  private modalRef: TemplateRef<any>;

  constructor(private modalService: NgbModal, private unitsApi: UnitService, private modalControl: ModalService) {
    this.modalControl.recipeMaker.subscribe((val) => {
      if (val === 'open') {
        this.modalService.open(this.modalRef, { size: 'lg' });
      }
    })
  }

  ngOnInit() {
     this.data = new Recipe();
     this.unitsApi.getAll().subscribe((us) => this.units = us);
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
