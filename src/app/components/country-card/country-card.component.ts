import { AfterContentChecked, AfterContentInit, Component, Input } from '@angular/core';
import { Country } from 'src/app/model/country';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements AfterContentInit, AfterContentChecked {

  @Input()
  public country?: Country;

  public ngAfterContentInit(): void {
    console.log('AfterContentInit - initialized projected content in CountryCardComponent');
  }

  public ngAfterContentChecked(): void {
    console.log('AfterContentChecked - checked projected content in CountryCardComponent and checked its changes');
  }
}
