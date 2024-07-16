import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, ChildComponent],
  template: `
    @if (isServerRunning) {
      <section><app-user occupation="Java Software Engineer" /></section>
      <app-child (addItemEvent)="addItemEvent()" />
    } @else {
      <section><h1 [autocapitalize]="isAutoCaps" >You are not logged-in!</h1></section>
    }
    
    <ul>
      @for (os of operatingSystems; track os.id) {
        <li>{{ os.name }}</li>
      }
    </ul>

    <button (click)="greet()">
      Log-in
    </button>
    
    `,
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorial2';
  city = 'Cebu';
  isServerRunning = true;
  operatingSystems = [{ id: 'win', name: 'Windows' }, { id: 'linux', name: 'Linux' }, { id: 'mac', name: 'Apple Mac' }];
  isAutoCaps = true;

  greet() {
    alert(`Hello World!`);
  }

  addItemEvent() {

  }
}
