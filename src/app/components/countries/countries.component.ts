import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Country } from 'src/app/model/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit, OnDestroy {
  
  public countries: Country[] = [];

  private countries$: Subscription = new Subscription();

  private readonly filters: string[] = ['name', 'region', 'flags', 'languages', 'population'];

  constructor(private readonly countryService: CountryService) {}

  public ngOnInit(): void {
    this.countries$ = this.countryService.getAllCountries(this.filters).subscribe(countries => {
      this.countries = countries;
      console.log(countries);
    });
  }

  public ngOnDestroy(): void {
    this.countries$.unsubscribe();
  }
}
