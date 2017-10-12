import {Component} from '@angular/core';


export class Product {
  id: number;
  name: string;
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'Macbook' },
  { id: 2, name: 'iPhone' },
  { id: 3, name: 'Samsung' },
  { id: 4, name: 'Dell' },
  { id: 5, name: 'Hard Drives' },
  { id: 6, name: 'Webcam' },
  { id: 7, name: 'RAM' },
  { id: 8, name: 'Graphics Card' },
  { id: 9, name: 'ROM' },
  { id: 10, name: 'iPad' }
];

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  // templateUrl: './app.component.html',
  template: `
    <h1>{{title}}</h1>
    <h2>My Products</h2>
    <ul class="heroes">
      <li *ngFor="let product of products"
          [class.selected]="product === selectedProduct"
          (click)="onSelect(product)">
        <span class="badge">{{product.id}}</span> {{product.name}}
      </li>
    </ul>
    <div *ngIf="selectedProduct">
      <h2>{{selectedProduct.name}} details!</h2>
      <div><label>id: </label>{{selectedProduct.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedProduct.name" placeholder="name"/>
      </div>
    </div>
    `,
})
export class AppComponent {
  title = 'Products';
  products = PRODUCTS;
  selectedProduct: Product;
  product: Product = {
    id: 1,
    name: 'Windstorm'
  };
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}


