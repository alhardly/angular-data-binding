import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.less']
})
export class CustomComponent implements OnInit {

  // Output的名称必须是 Input名称 + change，并且属性变化之后，需要emit
  @Input() value = '我是默认值';
  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }

  resetValue() {
    this.value = '我是默认值';
    this.valueChange.emit(this.value);
  }

}
