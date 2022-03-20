import { Component } from '@angular/core';
import { leftMenuConfig } from './wrapper/menu/menu-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuList = leftMenuConfig;
  constructor() {}
}
