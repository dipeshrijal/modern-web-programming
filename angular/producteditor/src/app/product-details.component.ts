import {Component, Input, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';

import {Product} from './product';
import {ProductService} from './product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'product-detail',
  styleUrls:['./product-detail.component.css'],
  template: `
    <div *ngIf="product">
      <h2>{{product.name}} details!</h2>
      <div><label>id: </label>{{product.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="product.name"
               placeholder="name"/>
      </div>
      <button (click)="goBack()">Back</button>
    </div>
  `
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.productService.getProduct(+params.get('id')))
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }
}
