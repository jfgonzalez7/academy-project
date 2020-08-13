import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html'
})
export class ListHeaderComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
