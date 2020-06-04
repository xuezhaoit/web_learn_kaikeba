import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'mktime'
})

export class MktimePipe implements PipeTransform{
  transform(timestamp:number):string{
    let oDate=new Date(timestamp);

    return oDate.getFullYear()+'-'+(oDate.getMonth()+1)+'-'+oDate.getDate();
  }
}
