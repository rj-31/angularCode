import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  notification: string = '';
  list = ['Do yoga'];

  addNewItem(newItem: string) {
    this.list.push(newItem);
    this.notification = 'Item added successfully';
  }
}
