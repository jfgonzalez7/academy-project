import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  errorMessage: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (result: Product[]) => {
        this.products = result;
      }, error => {
        this.errorMessage = error
      }
    );
  }

  addToCart(productId: number) {
    this.productService.addNewProduct(productId);
  }
}
