import {Component, OnInit} from '@angular/core';
import {CartService, ShoppingCartItem} from '../cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
})
export class NavbarComponent implements OnInit {

  shoppingCartItems: ShoppingCartItem[];

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.shoppingCartItems = this.cartService.cartItems;
  }

  getCartTotal() {
    return this.cartService.cartTotal;
  }
}
