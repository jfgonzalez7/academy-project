import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Cliente } from '../cliente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.scss']
})
export class ClientAddComponent implements OnInit {



  name: string;
  phone: string;
  address: string;


  constructor(private clientAddService: ClientService, private router: Router) { }

  ngOnInit() { }


  onSubmit() {

    const newClient: Cliente = {
      id_client: null,
      cli_name: this.name,
      cli_telefono: this.phone,
      cli_direccion: this.address
    }
    console.log(newClient);
    this.clientAddService.saveClient(newClient).subscribe(response => {
      console.log(response);
      this.router.navigate(['clients']);
    }, error => {
      // error message
    }
    );
  }

}
