import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[] = [];

  constructor() { 
    const newProduct: Product = {
      id: 1,
      name: 'Strawberries',
      description: 'Fresh produced directly from the farm',
      price: 1500,
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/71VSEKoK5RL._SX425_.jpg'
    }
    this.addNewProduct(newProduct);
    this.addNewProduct(newProduct);
    this.addNewProduct(newProduct);
  }

  addNewProduct(product: Product) {
    this.products = [...this.products, product];
  }
}
