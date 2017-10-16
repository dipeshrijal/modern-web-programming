import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart/cart.service';
import {Product} from '../../../../angular/producteditor/src/app/product';

@Component({
  selector: 'app-navbar',
  template: `
    <!-- Dropdown Structure -->
    <ul id="dropdown1"
        class="dropdown-content">
      <li><a href="#">Profile</a></li>
      <li><a href="#">Settings</a></li>
      <li class="divider"></li>
      <li><a href="#">Logout</a></li>
    </ul>

    <div class="navbar-fixed teal">
      <nav>
        <div class="nav-wrapper teal">
          <a href="#"
             class="brand-logo btn-floating btn-large teal"
             id="button-collapse"
             data-activates="slide-out">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right">
            <li><a href="">Sass</a></li>
            <li>
              <a>
                <span *ngIf="cartItems.length > 0">{{cartItems.length}}</span>
                <i class="material-icons right">shopping_cart</i></a>
            </li>
            <!-- Dropdown Trigger -->
            <li>
              <a class="dropdown-button"
                 href="#"
                 data-activates="dropdown1">
                Dipesh
                <i class="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  `
})
export class NavbarComponent implements OnInit{
  cartItems: Product[];
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.cartItems;
  }



}
