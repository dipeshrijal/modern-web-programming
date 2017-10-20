import {Component} from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';

@Component({
  selector: 'my-dashboard',
  styleUrls: ['./dashboard.component.css'],
  template: `
    <h3>Top Products</h3>
    <div class="grid grid-pad">
      <a *ngFor="let product of products"
         [routerLink]="['/detail', product.id]"
         class="col-1-4">
        <div class="module hero">
          <h4>{{product.name}}</h4>
        </div>
      </a>
    </div>`
})
export class DashboardComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .then(products => this.products = products.slice(1, 5));
  }

}
