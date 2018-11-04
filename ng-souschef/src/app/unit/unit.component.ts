import { Component, OnInit, Input } from '@angular/core';
import { Unit } from '../unit';
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  @Input() dataId: string;
  unit: Unit;

  constructor(private api: UnitService) { }

  ngOnInit() {
    this.api.getUnit(this.dataId).subscribe((u) => this.unit = u);
  }

}
