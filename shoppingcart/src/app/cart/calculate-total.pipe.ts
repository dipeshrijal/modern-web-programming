import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'calculate',
})
export class CalculateTotalPipe implements PipeTransform {

  transform(quantity: number, price: number) {
    return "$" + quantity * price;
  }

}
