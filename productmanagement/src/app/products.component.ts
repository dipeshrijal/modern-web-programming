import {Component} from '@angular/core';
import {Product} from './Product';


@Component({
  selector: 'product',
  template: `
    <h1>{{title}}</h1>
    <ul class="list-group">
      <li class="list-group-item"
          [class.active]="product === selectedProduct"
          *ngFor="let product of products"
          (click)="select(product)">
        {{ product.name }}
      </li>
    </ul>
    <product-detail [product]="selectedProduct" (deleteRequest)="deleteProduct($event)"></product-detail>
  `,
})
export class ProductsComponent {
  title = 'List of All Products';
  selectedProduct: Product;
  products: Product[] = [
    {id: 1, name: 'iPhone', price: 1000, descriptiption: 'Lorem'},
    {id: 2, name: 'iPad', price: 600, descriptiption: 'Lorem'},
    {id: 3, name: 'Samsung', price: 621, descriptiption: 'Lorem'},
    {id: 4, name: 'Dell', price: 750, descriptiption: 'Lorem'},
  ];

  select(product: Product) {
    this.selectedProduct = product;
  }

  deleteProduct(product:Product) {
    const prod = this.products.find(p => p.id === product.id);
    this.products.splice(this.products.indexOf(prod), 1);
  }
}
