import { Component } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'souschef';

  constructor(private modalService: ModalService) { }

  openModal(modal: string) {
    this.modalService[modal].next('open');
  }
}
