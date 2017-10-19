import {Component, OnInit} from '@angular/core';

import {Product} from './Product';
import {ProductService} from './product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addProduct() {
    console.log('submit from product compoennt');
  }

}
