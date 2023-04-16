import { Component, Input, OnDestroy, OnInit, OnChanges } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Country } from 'src/app/model/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public input?: string;
  
  public countries: Country[] = [];

  private readonly destroy$: Subject<boolean> = new Subject();

  constructor(private readonly countryService: CountryService) {}

  public ngOnInit(): void {
    this.getAllCountries();
    console.log('OnInit - initializing CountriesComponent');
  }

  public ngOnChanges(): void {
    if (this.input) {
      this.countryService.getCountriesByName(this.input).pipe(takeUntil(this.destroy$)).subscribe(countries => {
        this.countries = countries;
      });
      return;
    }
    this.getAllCountries();
    console.log('OnChanges - checking input changes in CountriesComponent');
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
    console.log('OnDestroy - cleaning subscriptions in CountriesComponent');
  }

  private getAllCountries(): void {
    this.countryService.getAllCountries().pipe(takeUntil(this.destroy$)).subscribe(countries => {
      this.countries = countries;
    });
  }
}
