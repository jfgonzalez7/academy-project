import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { order } from './order.model';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }



  findOrdersByIdClient(id_client: number){
    const  endpoint = '';
    this.http.get<order[]>(endpoint);
  }

}
