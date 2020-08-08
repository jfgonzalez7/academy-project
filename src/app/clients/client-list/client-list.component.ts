import { Component, OnInit } from '@angular/core';
import { ClientListService } from './client-list.service';
import { ClientesList } from './ClientesList.model';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  clientlist: Array<ClientesList>;

  displayedColumns: string[] = ['Id', 'Nombre', 'Telefono', 'Direccion'];

  constructor(private clientListService: ClientListService) { }

  ngOnInit() {
    this.clientListService.findClients().subscribe(
      response => {
        this.clientlist = response;
      }, error => { });

  }

}
