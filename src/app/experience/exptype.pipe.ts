import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exptype'
})
export class ExptypePipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): any[] {
    return value.filter((e,i)=> {
      if(e?.type==='office'){
        e.index = i;
        return e;
      }
    });
  }

}
