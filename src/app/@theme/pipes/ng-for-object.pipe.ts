import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngForObject'
})
export class NgForObjectPipe implements PipeTransform {

  transform(value: object): any {
    if (!value) {
      return [];
    }

    return Object.keys(value);
  }

}
