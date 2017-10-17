import {Product} from '../product/Product';

export class ShoppingCartItem {
  constructor(public product: Product, public quantity: number) {
  }
}

export class CartService {
  cartItems: ShoppingCartItem[] = [];
  cartTotal: number = 0;

  addProductToCart(productEl) {
    let shoppingCart: ShoppingCartItem;
    this.cartTotal++;

    if (this.cartItems.length > 0) {
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].product.id === productEl.id) {
          shoppingCart = this.cartItems[i];
          break;
        }
      }
    }

    if (shoppingCart) {
      shoppingCart.quantity++;
    } else {
      const newCart = new ShoppingCartItem(productEl, 1);
      this.cartItems.push(newCart);
    }
  }

  getCartTotal() {
    // this.cartTotal = this.cartItems.map(item => item.quantity)
    //   .reduce((total, current) => (total + current), 0);
    return this.cartItems.map(item => item.quantity)
      .reduce((total, current) => (total + current), 0);
  }
}
