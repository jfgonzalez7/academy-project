import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.scss']
})
export class ClientAddComponent implements OnInit {

  constructor(private clientAddService: ClientService) { }

  ngOnInit() { }


  saveCliente(client: Client) {
    this.clientAddService.saveClient(client).subscribe(response => {
      //success message
    }, error => {
      // error message
     }
    );
  }

}
