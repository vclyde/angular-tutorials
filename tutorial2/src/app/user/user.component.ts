import { Component, EventEmitter, Input, numberAttribute, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  // templateUrl: './user.component.html',
  template: `
    Username: {{ username }}
    <p>The users occupation is {{ occupation }} </p>
  `,
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'clyde';
  @Input() occupation = '';

}
