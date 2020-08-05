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
      description: 'Fresh produced',
      quantity: 3,
      imgUrl: ''
    }
    this.addNewProduct(newProduct);
    this.addNewProduct(newProduct);
  }

  addNewProduct(product: Product) {
    this.products = [...this.products, product];
  }

  editQuantity(quantity: number) {
    console.log('Quantity is now ' + quantity);
    
  }

  deleteProduct() {
    console.log('Product deleted!');
    
  }
}
