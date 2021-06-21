import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    },
  ],
})
export class CustomSelectComponent implements OnInit, ControlValueAccessor {

  @Input()
  public options: any[] | null = [];

  @Input()
  public valueKey = 'id';

  @Input()
  public labelKey = 'name';

  public selectedValue!: number | null;

  constructor() { }

  public updateOption(): void {
    const selectedOption = this.options?.find((option: any) => {
      return option[this.labelKey] === this.selectedValue;
    });

    this.changeFn(selectedOption[this.valueKey]);
  }

  public writeValue(obj: Record<string, number>): void {
    this.selectedValue = obj[this.valueKey];
  }
  public registerOnChange(onChange: (value: number) => void): void {
    this.changeFn = onChange;
  }
  public registerOnTouched(onTouch: () => void): void {
    this.touchFn = onTouch;
  }

  public ngOnInit(): void {
  }

  private changeFn = (_: any): void => {};
  private touchFn = (_: any): void => {};

}
