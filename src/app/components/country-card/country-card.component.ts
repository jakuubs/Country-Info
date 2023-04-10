import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Country } from 'src/app/model/country';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnChanges {

  @Input()
  public country?: Country;

  public formattedLanguages: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['country']?.currentValue !== changes['country'].previousValue) {
      this.formatLanguages();
    };
  }

  private formatLanguages(): void {
    this.formattedLanguages = Object.values(this.country?.languages || {}).join(', ').trimEnd();
  }
}
