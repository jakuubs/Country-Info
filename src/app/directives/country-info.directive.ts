import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appCountryInfo]',
})
export class CountryInfoDirective implements OnInit {

  @HostBinding('style.list-style-type')
  public listStyleType: string = 'none';

  constructor(private readonly el: ElementRef) {}

  public ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).querySelectorAll('span').forEach((element) => {
      element.style.fontWeight = 'bold';
    });
    this.el.nativeElement.style.paddingLeft = 0;
  }
}
