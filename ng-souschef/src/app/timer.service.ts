import { Injectable } from '@angular/core';
import { Timer } from './timer';

@Injectable({
  providedIn: 'root'
})

export class TimerService {
  secondTimers: Timer[] = [];

  constructor() { }

  add(t: Timer) {
    this.secondTimers.push(t);
  }
}
