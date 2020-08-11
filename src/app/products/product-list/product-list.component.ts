import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  products: Product[];

  constructor(private productService: ProductService) { 
    let errorMessage: string;
    this.productService.getProducts().subscribe(
      (result: Product[]) => {
      this.products = result;
    }, error => (errorMessage = error));
  }

  ngOnInit() {
  }

}
