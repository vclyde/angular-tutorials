import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  // templateUrl: './child.component.html',
  template: `
    <button (click)="addItem()">Add Item</button>
  `,
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() incrementCountEvent = new EventEmitter<number>();
  @Output() addItemEvent = new EventEmitter<string>();

  count: number = 0;

  onClick() {
    this.count++;
    this.incrementCountEvent.emit(this.count);
  }

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
