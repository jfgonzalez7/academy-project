import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html'
})
export class ProductCartComponent implements OnInit {
  productCart: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productCart = this.productService.getCartItems();
  }

  removeProduct(productId: number) {
    this.productService.removeProduct(productId);
    this.productCart = this.productService.getCartItems();
  }
}
