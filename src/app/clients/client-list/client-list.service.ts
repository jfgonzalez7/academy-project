import { Injectable } from '@angular/core';
import { ClientesList } from './ClientesList.model';
import { HttpClientModule, HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ClientListService {

  constructor(private http: HttpClient) { }



  findClients() {
    const endpoint = 'https://5f2b2e646ae5cc00164234d6.mockapi.io/api/v1/clientes';
    return this.http.get<ClientesList[]>(endpoint);
  }
}
