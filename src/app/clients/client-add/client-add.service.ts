import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClientAdd } from './ClientAdd.model';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ClientAddService {


  private httHeaders = new HttpHeaders({ 'Content-type': 'application/json' });

  constructor(private http: HttpClient) { }


  saveClient(client: ClientAdd) {
    const endpoint = 'https://5f2b2e646ae5cc00164234d6.mockapi.io/api/v1/clientes';
    return this.http.post(endpoint, client, { headers: this.httHeaders }).pipe(map(res => res));
  }
}
