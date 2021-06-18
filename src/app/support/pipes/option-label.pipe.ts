import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'optionLabel',
})
export class OptionLabelPipe implements PipeTransform {

  public transform(value: number | string, option: any, key: string): unknown {
    return option[key];
  }

}
