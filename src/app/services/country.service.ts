import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../model/country';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseUrl = environment.baseUrl;

  constructor(private readonly http: HttpClient) {}

  public getAllCountries(filterFields?: string[]): Observable<Country[]> {
    const options = filterFields
      ? {
          params: new HttpParams().set('fields', filterFields.join(',')),
        }
      : {};
    return this.http.get<Country[]>(`${this.baseUrl}/all`, options).pipe(catchError(() => of()));
  }

  public getCountryByName(countryName: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/name/${countryName}`).pipe(catchError(() => of()));
  }
}
