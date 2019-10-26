import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DialogComponent),
      multi: true
    }
  ]
})
export class DialogComponent implements ControlValueAccessor {

  @Input() title: string;

  private onChange: any = () => { };

  private shouldWePreventClose = false;

  open: boolean;

  constructor() { }

  writeValue(value: boolean) {
    this.open = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) { }

  private set(value: boolean) {
    this.open = value;
    this.onChange(this.open);
  }

  close() {
    if (this.shouldWePreventClose) {
      this.shouldWePreventClose = false;
      return;
    }

    this.set(false);
  }

  preventClose() {
    this.shouldWePreventClose = true;
  }

}
