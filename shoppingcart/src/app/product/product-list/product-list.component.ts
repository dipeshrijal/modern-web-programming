import {Component, Input} from '@angular/core';
import {Product} from '../Product';
import {ProductService} from '../product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styles: [`
    .card .card-image img {
      height: 200px;
    }

    .edit {
      right: 70px;
    }
  `],
})
export class ProductListComponent {

  @Input() product: Product;

  constructor(private productService: ProductService) {
  }

  addToCart() {
    this.productService.addToCart(this.product);
  }

  onSelect() {
    this.productService.onSelected.emit(this.product);
  }
}
