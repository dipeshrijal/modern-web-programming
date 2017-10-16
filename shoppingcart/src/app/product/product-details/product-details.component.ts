import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../Product';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {

  selectedProduct: Product;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.onSelected
      .subscribe(
        (product: Product) => {
          this.selectedProduct = product;
        }
      );
  }


}
