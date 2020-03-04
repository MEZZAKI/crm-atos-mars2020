import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, arg: any): any {
     if(value && arg==='tjmHt'){
      return value.totalHt();
     }
     else if(value && arg==='totalHt'){
      return value.totalHt();
     }
     return 'ERROR';

  }

}
