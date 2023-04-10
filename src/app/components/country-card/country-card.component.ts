import { Component, Input, OnChanges } from '@angular/core';
import { Country } from 'src/app/model/country';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnChanges {

  @Input()
  public country?: Country;

  public ngOnChanges(): void {
    console.log(this.country);
  }
}
