import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[app-dropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('mouseenter') open() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('mouseleave') close() {
    this.isOpen = !this.isOpen;
  }
}
