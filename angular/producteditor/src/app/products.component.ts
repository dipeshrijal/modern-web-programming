import {Component, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'products',
  styleUrls: ['./products.component.css'],
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {
    this.getProducts();
  }

  product: Product = {
    id: 1,
    name: 'Windstorm'
  };

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.id]);
  }

}
