import { Component } from '@angular/core';

@Component({
  selector: 'awesome-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  obj = { email: 'test' };
}
