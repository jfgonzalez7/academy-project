import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Cliente } from '../cliente.model';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  clientlist: Array<Cliente>;

  displayedColumns: string[] = ['Id', 'Nombre', 'Telefono', 'Direccion'];

  constructor(private clientListService: ClientService) { }

  ngOnInit() {
    this.clientListService.findClients().subscribe(
      response => {
        console.log(response);
        this.clientlist = response;
      }, error => { 

      });

  }

}
