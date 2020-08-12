import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() description: string;
  @Input() price: number;
  @Input() imgUrl: string;
  @Output() selected = new EventEmitter<Number>();

  constructor() { }

  ngOnInit() { }

  addProduct(id: number) {
    this.selected.emit(id);
  }
}
