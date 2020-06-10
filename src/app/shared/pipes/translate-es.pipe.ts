import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'translateEs'})
export class TranslateEsPipe implements PipeTransform {
  transform(list: any[]): any[] {
    const dataSpain = list.filter( element => {return element.language.name === 'es'});
    return dataSpain;
  }
}
