import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Cliente } from '../cliente.model';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html'
})
export class ClientListComponent implements OnInit {

  clientlist: Array<Cliente>;

  displayedColumns: string[] = ['id', 'nombre', 'telefono', 'direccion','view'];

  constructor(private clientListService: ClientService) { }

  ngOnInit() {
    this.clientListService.findClients().subscribe(
      (response) => {
        this.clientlist = response;
      }, error => { 

      });

  }

}
