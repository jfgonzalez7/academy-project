import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { order } from './order.model';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  findOrdersByIdClient(id_client: number) {
    const endpoint = 'https://5f2b2e646ae5cc00164234d6.mockapi.io/api/v1//clientes/' + id_client + '/pedidos';
    return this.http.get<order[]>(endpoint);
  }

}
