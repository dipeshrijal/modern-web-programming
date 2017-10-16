import {Product} from '../product/Product';

export class CartService {
  cartItems: Product[] = [];

  addProductToCart(product: Product) {

    this.cartItems.push(product);

  }
}
