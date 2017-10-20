import {Injectable} from '@angular/core';
import {Product} from './product';
import {PRODUCTS} from './mock-products';

@Injectable()
export class ProductService {
  getProducts():Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }

  getProductsSlowly(): Promise<Product[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getProducts()), 2000);
    });
  }

  getProduct(id: number) {
    return this.getProducts()
      .then(products => products.find(product => product.id === id));
  }
}
