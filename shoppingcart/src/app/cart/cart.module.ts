import {NgModule, PipeTransform} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart.component';
import {CartService} from './cart.service';
import {CalculateTotalPipe} from './calculate-total.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CartComponent,
    CalculateTotalPipe,
  ],
  declarations: [
    CartComponent,
    CalculateTotalPipe
  ],
  providers: [CartService],

})
export class CartModule {

}
