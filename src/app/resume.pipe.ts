import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  maLimit: any;


  transform(value: any, limit?: number): any {

    this.maLimit = (limit)? limit : 7;

    if(!value) {
      return null;
    }
    else
    return value.substr(0,this.maLimit) +'***';
  }



}
