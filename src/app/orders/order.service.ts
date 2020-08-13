import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { order } from './order.model';
import { Product } from '../products/product.model';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  findOrdersByIdClient(id_client: number) {
    const endpoint = 'https://5f2b2e646ae5cc00164234d6.mockapi.io/api/v1/clientes/' + 1 + '/pedidos';
    return this.http.get<order[]>(endpoint);
  }


  findProductByIdProdcuto(idProduct:number){
    const endpoint ='https://5f2b2e646ae5cc00164234d6.mockapi.io/api/v1/:/productos/'+1;
    return this.http.get<Product>(endpoint);
  }

}
