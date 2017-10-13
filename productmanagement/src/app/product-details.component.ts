import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Product} from './product';

@Component({
  selector: 'product-detail',
  template: `
    <h3>{{title}}</h3>
    <div *ngIf="product">
      {{product.name}}
      <button (click)="deleteProduct(product)">Delete</button>

      <input type="text" [(ngModel)]="product.name">
      {{product.name}}
    </div>
  `,
})
export class ProductDetailsComponent {
  title = 'Product Details!!!';
  @Input() product: Product;
  @Output() deleteRequest = new EventEmitter<Product>();

  deleteProduct(product: Product) {
    this.deleteRequest.emit(product);
  }
}
