import { Component, OnInit, Input } from '@angular/core';
import { Unit } from '../unit';
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-unit-select',
  templateUrl: './unit-select.component.html',
  styleUrls: ['./unit-select.component.css']
})
export class UnitSelectComponent implements OnInit {
  @Input() dataId: string;
  units: Unit[];
  constructor(private api: UnitService) { }

  ngOnInit() {
    this.api.getAll().subscribe((us) => this.units = us);
  }

}
