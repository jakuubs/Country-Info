import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public input: string = '';
  
  public getSearchValue(input: string): void {
    this.input = input;
  }
}
