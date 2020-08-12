import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.service';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  animations: [
    trigger('slideUpOut',
      [transition(':enter',
        [style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('0.4s cubic-bezier(0.04, 1.13, 0.97, 0.98)',
          style({ opacity: 1, transform: 'translateY(0px)' }))]),
      transition(':leave',
        [style({ opacity: 1, transform: 'translateY(0px)' }),
        animate('0.4s cubic-bezier(0.04, 1.13, 0.97, 0.98)',
          style({ opacity: 0, transform: 'translateY(-10px)' }))])]),
    trigger('slideDownIn', [transition(':enter',
      [style({ opacity: 0, transform: 'translateY(-8px)' }),
      animate('0.4s cubic-bezier(0.04, 1.13, 0.97, 0.98)',
        style({ opacity: 1, transform: 'translateY(0px)' }))]),
    transition(':leave', [style({ opacity: 1, transform: 'translateY(0px)' }),
    animate('0.4s cubic-bezier(0.04, 1.13, 0.97, 0.98)',
      style({ opacity: 0, transform: 'translateY(-8px)' }))])])]
})
export class MessagesComponent implements OnInit {


  showClear = false;

  constructor(public messagesService: MessagesService) {
    console.log("Llego al constructor de mensage component");
   }

  ngOnInit() {
    console.log("ng on initttttttt");
    this.messagesService.showClear.subscribe(showClear => {
      this.showClear = showClear;
    });
  }

  clear() {
    this.messagesService.clear();
  }
}


/*Copyright 2017-2018 Google Inc. 
All Rights Reserved.Use of this source code is governed by an MIT-style license
 thatcan be found in the LICENSE file at http://angular.io/license*/



