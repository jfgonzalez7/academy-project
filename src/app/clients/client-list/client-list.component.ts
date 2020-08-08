import { Component, OnInit } from '@angular/core';
import { ClientListService } from './client-list.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  constructor(private clientListService: ClientListService) { }

  ngOnInit() {
    //console.log(this.clientListService.findClients());

  }

}
