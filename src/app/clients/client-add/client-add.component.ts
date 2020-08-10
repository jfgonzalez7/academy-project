import { Component, OnInit } from '@angular/core';
import { ClientAddService } from './client-add.service';
import { ClientAdd } from './ClientAdd.model';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.scss']
})
export class ClientAddComponent implements OnInit {

  constructor(private clientAddService: ClientAddService) { }

  ngOnInit() {
  }


  saveCliente(client: ClientAdd) {
    this.clientAddService.saveClient(client).subscribe(response => {
      //success message
    }, error => {
      // error message
     }
    );
  }

}
