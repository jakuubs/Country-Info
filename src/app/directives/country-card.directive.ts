import {
  Directive,
  HostListener,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appCountryCard]',
})
export class CountryCardDirective implements OnChanges {
  @Input()
  public region: string = 'Default';

  private regionColors: { [key: string]: string } = {
    'Europe': '#9fe39d',
    'Asia': '#db9595',
    'Americas': '#b19bd1',
    'Africa': '#d1bd9b',
    'Oceania': '#7facf5',
    'Antarctica': '#9bd1cc',
    'Default': '#ffffff',
  };

  @HostBinding('style.transition')
  public transition: string = 'all .2s ease-in-out';

  @HostListener('mouseover')
  public onMouseover(): void {
    this.el.nativeElement.style.transform = 'scale(1.1)';
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.el.nativeElement.style.transform = 'scale(1.0)';
  }

  constructor(private readonly el: ElementRef) {}

  public ngOnChanges(): void {
    if (this.regionColors.hasOwnProperty(this.region)) {
      this.el.nativeElement.style.backgroundColor = this.regionColors[this.region];
    }
  }
}
