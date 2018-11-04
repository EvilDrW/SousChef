import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-collection',
  templateUrl: './timer-collection.component.html',
  styleUrls: ['./timer-collection.component.css']
})
export class TimerCollectionComponent implements OnInit {

  constructor(public api: TimerService) { }

  ngOnInit() {
  }

}
