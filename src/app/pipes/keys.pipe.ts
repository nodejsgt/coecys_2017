import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {
    let keys = [];
    // console.log(value);
    for(let key in value) {
      keys.push(key);
    }

    // console.log(keys);
    return keys;
  }

}
