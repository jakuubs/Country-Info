import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseUrl = environment.baseUrl;

  constructor(private readonly http: HttpClient) {}

  public getAllCountries(filterFields?: string[]) {
    const options = filterFields
      ? {
          params: new HttpParams().set('fields', filterFields.join(',')),
        }
      : {};
    return this.http.get<Country[]>(`${this.baseUrl}/all`, options);
  }

  public getCountryByName(countryName: string) {
    return this.http.get<Country[]>(`${this.baseUrl}/name/${countryName}`);
  }
}
