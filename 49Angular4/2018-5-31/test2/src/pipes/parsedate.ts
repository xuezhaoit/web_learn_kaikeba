import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'parsedate'
})

export class ParsedatePipe implements PipeTransform{
  transform(str:string):number{
    return new Date(str).getTime();
  }
}
