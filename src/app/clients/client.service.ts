import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private httHeaders = new HttpHeaders({ 'Content-type': 'application/json' });
  
  constructor(private http: HttpClient) { }

  findClients() {
    const endpoint = 'https://5f2b2e646ae5cc00164234d6.mockapi.io/api/v1/clientes';
    return this.http.get<Cliente[]>(endpoint);
  }

  saveClient(client: Cliente) {
    const endpoint = 'https://5f2b2e646ae5cc00164234d6.mockapi.io/api/v1/clientes';
    console.log(this.http.post(endpoint, client, { headers: this.httHeaders }));
    return this.http.post(endpoint, client, { headers: this.httHeaders }).pipe(map(res => res));
  }
}
