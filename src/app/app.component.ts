import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<h1>Hello World</h1>',
  // templateUrl: 'Hello World',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes';
}
