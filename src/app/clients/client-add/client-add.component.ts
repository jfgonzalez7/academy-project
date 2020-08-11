import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.scss']
})
export class ClientAddComponent implements OnInit {


  client: Cliente;

  constructor(private clientAddService: ClientService) { }

  ngOnInit() { }


  saveCliente(client) {
    console.log(client);
    this.clientAddService.saveClient(client).subscribe(response => {
      console.log(response);
    }, error => {
      // error message
    }
    );
  }

}
