import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CartModule} from './cart/cart.module';
import {ProductComponent} from './product/product.component';
import {NavbarComponent} from './components/navbar.component';
import {SidebarComponent} from './components/sidebar.component';
import {ProductService} from './product/product.service';
import {CartService} from './cart/cart.service';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductDetailsComponent} from './product/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavbarComponent,
    SidebarComponent,
    ProductListComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    CartModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
