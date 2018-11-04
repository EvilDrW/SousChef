import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { timer } from 'rxjs/index';

import { Timer } from '../timer';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  // both in seconds
  @Input() time: Timer;
  timeElapsed: number;
  _timer: Subscription;

  constructor() { }

  ngOnInit() {
    this._timer = timer(0, 1000).subscribe((t) => {
      this.timeElapsed = t;
      if (this.timeElapsed >= this.time.time) {
        this._timer.unsubscribe();
      }
    });
  }

}
