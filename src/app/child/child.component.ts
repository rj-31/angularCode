import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() notify:string
  @Output() newItem = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  emitData(value: string) {
    this.newItem.emit(value);
    console.log(value);
  }
}
