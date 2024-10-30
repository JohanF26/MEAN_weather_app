import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

const options = { year: 'numeric', month: 'short', day: 'numeric' };

@Pipe({
  name: 'datepipe'
})
export class DatePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    moment.locale()
    return moment(value).add(1, 'days').format('Do MMM. YYYY');
  }

}
