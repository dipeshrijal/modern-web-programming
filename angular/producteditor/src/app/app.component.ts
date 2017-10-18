import {Component, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  providers: [ProductService],
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
    <product-detail [product]="selectedProduct"></product-detail>
  `,
})
export class AppComponent implements OnInit{
  products:Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  product: Product = {
    id: 1,
    name: 'Windstorm'
  };

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  getHeroes(): void {
    this.productService.getProductsSlowly().then(products => this.products = products);
  }
}


