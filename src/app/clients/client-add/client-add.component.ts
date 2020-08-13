import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Cliente } from '../cliente.model';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/shared/messages/messages.service';


@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.scss']
})
export class ClientAddComponent implements OnInit {



  name: string;
  phone: string;
  address: string;
  constructor(private clientAddService: ClientService, private router: Router, private message: MessagesService) { }

  ngOnInit() { }


  onSubmit() {

    const newClient: Cliente = {
      id_client: null,
      cli_name: this.name,
      cli_telefono: this.phone,
      cli_direccion: this.address
    }
    this.clientAddService.saveClient(newClient).subscribe(response => {
      this.message.create("Cliente exitoso", 'alert-success', true);
      setTimeout(() => {
        this.router.navigate(['clients']);
      }, 4000
      );

    }, error => {
      // error message
    }
    );
  }

}
