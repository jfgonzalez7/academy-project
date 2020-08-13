import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClientService } from '../client.service';
import { Cliente } from '../cliente.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html'
})
export class ClientListComponent implements OnInit {

  clientlist: Array<Cliente>;

  displayedColumns: string[] = ['id', 'nombre', 'telefono', 'direccion', 'view'];

  @Output() id_client = new EventEmitter<number>();

  constructor(private clientListService: ClientService,private router: Router) { }

  ngOnInit() {
    this.clientListService.findClients().subscribe(
      (response) => {
        this.clientlist = response;
      }, error => {
        // error message
      });

  }


  viewOrder(id_client: number){
    this.id_client.emit(id_client);
    this.router.navigate(['orders']);
  }

}
