import { Injectable } from '@angular/core';
import {Http} from '@angular/http';



@Injectable({
  providedIn: 'root'
})
export class ClientListService {

  constructor( private http:Http) { }



  findClients(){
    const endpoint = 'https://5f2b2e646ae5cc00164234d6.mockapi.io/api/v1/clientes';
    return this.http.get(endpoint);
  }
}
