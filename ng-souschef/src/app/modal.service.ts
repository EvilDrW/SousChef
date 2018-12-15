import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public recipeMaker: Subject<any> = new Subject<any>();
  public selectRecipe: Subject<any> = new Subject<any>();

  constructor() { }
}
