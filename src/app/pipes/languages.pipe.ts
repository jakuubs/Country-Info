import { Languages } from './../model/country';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languages'
})
export class LanguagesPipe implements PipeTransform {

  transform(languages?: Languages): string {
    return Object.values(languages || {}).join(', ').trimEnd();
  }
}
