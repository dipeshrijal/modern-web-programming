import {EventEmitter, Injectable} from '@angular/core';
import {Product} from './Product';
import {CartService} from '../cart/cart.service';


const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'iPhone',
    price: 999,
    image: '../../assets/cover1.jpg',
  },
  {
    id: 2,
    name: 'iPad',
    price: 499,
    image: '../../assets/cover2.jpg',
  },
  {
    id: 3,
    name: 'iMac',
    price: 3999,
    image: '../../assets/cover3.jpg',
  },
  {
    id: 4,
    name: 'Samsung',
    price: 799,
    image: '../../assets/cover4.jpg',
  },
  {
    id: 5,
    name: 'Dell',
    price: 699,
    image: '../../assets/cover5.jpg',
  },
  {
    id: 6,
    name: 'MacBook',
    price: 699,
    image: '../../assets/cover6.jpg',
  },
  {
    id: 7,
    name: 'Lenovo',
    price: 699,
    image: '../../assets/cover7.jpg',
  },
  {
    id: 8,
    name: 'Acer',
    price: 699,
    image: '../../assets/cover8.jpg',
  },
];

@Injectable()
export class ProductService {

  onSelected = new EventEmitter<Product>();

  constructor(private cartService: CartService) {
  }

  getProducts() {
    return PRODUCTS;
  }

  addToCart(product: Product) {
    this.cartService.addProductToCart(product);
  }
}
