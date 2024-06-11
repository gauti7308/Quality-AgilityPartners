import { Component, HostListener, TemplateRef } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  modalContent = false;

  constructor() { }

  openSortingModal() {
    this.modalContent = true;
    console.log('clicked')
  }
  closeModal(){
    this.modalContent = false;
   }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY > 500) {
      //$('#header').slideUp('slow');
    } else {
      //$('#header').slideDown('slow');
    }
  }
}
