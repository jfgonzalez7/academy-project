import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {
  productCart: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productCart = this.productService.getCartItems();
  }

  removeProduct(productId: number) {
    console.log(productId);
  }
}
