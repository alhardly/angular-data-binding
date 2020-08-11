
import { OnInit, Input, Output, Component, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SubComponent,
    multi: true
  }]
})
export class SubComponent implements ControlValueAccessor {
  innerValue = '默认值';

  @Input() parent;

  @Input()
  get value() {
    return this.innerValue;
  }
  set value(val) {
    this.innerValue = val ? val : '默认值';
  }


  // 使用angular/form 来实现双向绑定
  private onChange: (_: any) => any;
  private onTouched: () => any;

  resetValue() {

    this.value = '默认值';
    console.log(this.onChange);
    if (this.onChange) {
      this.onChange(this.value);
    }


  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }


}
