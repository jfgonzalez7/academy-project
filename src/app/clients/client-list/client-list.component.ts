import { Component, OnInit } from '@angular/core';
import { ClientListService } from './client-list.service';
import { Client } from './Client.model';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  clientlist: Array<Client>;

  constructor(private clientListService: ClientListService) {
    console.log("llego clients list")
  }

  ngOnInit() {
    this.clientListService.findClients().subscribe(
      response => {
         this.clientlist = response;
      }, error => { });

  }

}
