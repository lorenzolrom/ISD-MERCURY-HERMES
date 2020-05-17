import {Component, Input, OnInit} from '@angular/core';
import {GlobalVariables} from '../globals';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems;

  constructor() {
    this.menuItems = GlobalVariables.MENU_ITEMS;
  }

  ngOnInit(): void {
  }

}
