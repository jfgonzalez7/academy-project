import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() price: number;
  @Input() imgUrl: string;

  constructor() { }

  ngOnInit() {
  }

  showDetails() {
    console.log('These are the product details');
    
  }

}
