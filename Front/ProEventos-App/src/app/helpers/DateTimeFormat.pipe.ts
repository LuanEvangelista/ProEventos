import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../Util/constants';

@Pipe({
  name: 'DateFormatPipe',
  standalone: true,
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {
  constructor() {
    super('en-US');
  }

  override transform(value: any, args?: any): any {
    if (!value) return '';
    const date = value instanceof Date ? value : new Date(value);
    return super.transform(date, Constants.DATE_TIME_FMT);
  }
}
