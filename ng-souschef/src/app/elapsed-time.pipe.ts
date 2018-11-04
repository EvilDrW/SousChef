import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elapsedTime'
})
export class ElapsedTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var seconds: number = value as number;

    var temp: number = seconds % 3600;
    var hours: number = (seconds - temp) / 3600;
    seconds = temp;

    temp = seconds % 60;
    var minutes: number = (seconds - temp) / 60
    seconds = temp;

    var output: string = '';
    var printing: boolean = false;

    if (hours > 0) {
      output += hours;
      printing = true;
    }

    if (printing) {
      output += ':' + minutes.toPrecision(2);
    }
    else if (minutes > 0) {
      output += minutes;
      printing = true;
    }

    if (printing) {
      output += ':';
    }
    output += seconds.toPrecision(2);

    return output;
  }

}
