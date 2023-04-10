import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryInfoDirective } from './directives/country-info.directive';
import { CountryCardDirective } from './directives/country-card.directive';

@NgModule({
  declarations: [AppComponent, SearchbarComponent, CountryCardComponent, CountriesComponent, CountryInfoDirective, CountryCardDirective],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
