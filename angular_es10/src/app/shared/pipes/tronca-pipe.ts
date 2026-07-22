import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tronca',
})
export class TroncaPipe implements PipeTransform {
  transform(value: string | null | undefined, maxLength: number = 20): string {
    if (value == null) {
      return '';
    }

    if (value.length <= maxLength) {
      return value;
    }

    return value.slice(0, maxLength) + '…';
  }
}