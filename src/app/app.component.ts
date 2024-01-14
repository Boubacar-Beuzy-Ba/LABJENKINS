import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'labjenkins app is running';
  counter = 0;

  increment() {
    return this.counter++;
  }

  decrement() {
    return this.counter--;
  }

  reset() {
    return (this.counter = 0);
  }
}
