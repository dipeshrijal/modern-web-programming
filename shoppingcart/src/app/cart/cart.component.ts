import {Component, Input} from '@angular/core';
import {Product} from '../product/Product';
import {CartService} from './cart.service';

@Component({
  selector: 'cart',
  template: `
    <p>
      Add to Cart
      <a href="#"
         (click)="addToCart()"
         class="btn-large waves-effect waves-light blue darken-3">
        <i class="material-icons">add_shopping_cart</i>
      </a>
    </p>
  `,
})
export class CartComponent {

  @Input() product: Product;

  constructor(private cartService: CartService){}

  addToCart() {
    this.cartService.addProductToCart(this.product);
  }
}
