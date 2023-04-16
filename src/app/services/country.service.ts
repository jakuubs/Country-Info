import { DEFAULT_FILTERS } from './../app.module';
import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Country } from '../model/country';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseUrl = environment.baseUrl;

  constructor(@Inject(DEFAULT_FILTERS) private defaultFilters: string[], private readonly http: HttpClient) {}

  public getAllCountries(filterFields?: string[]): Observable<Country[]> {
    const options = this.createParamsForFilterFields(filterFields);
    return this.http
      .get<Country[]>(`${this.baseUrl}/independent`, options)
      .pipe(catchError(() => of([])));
  }

  public getCountriesByName(
    countryName: string,
    filterFields?: string[]
  ): Observable<Country[]> {
    const options = this.createParamsForFilterFields(filterFields);
    return this.http
      .get<Country[]>(`${this.baseUrl}/name/${countryName}`, options)
      .pipe(catchError(() => of([])));
  }

  private createParamsForFilterFields(filterFields?: string[]) {
    return {
          params: new HttpParams()
            .set('status', true)
            .set('fields', (filterFields ?? this.defaultFilters).join(',')),
        };
  }
}
