import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productCart: Product[] = [];

  constructor(private http: HttpClient) { }

  getProducts() {
    const endpoint = 'https://5f3176d5373bc7001635fb21.mockapi.io/api/v1/productos';
    return this.http.get(endpoint);
  }

  getProductById(idProd: number) {
    const endpoint = 'https://5f3176d5373bc7001635fb21.mockapi.io/api/v1/productos/' + idProd;
    return this.http.get<Product>(endpoint);
  }

  addNewProduct(productId: number) {
    this.getProductById(productId).subscribe((result => this.productCart = [...this.productCart, result]));
  }

  getCartItems() {
    return this.productCart;
  }
}
