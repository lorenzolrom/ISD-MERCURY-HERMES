import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from "../globals";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  menuItems
  constructor() {
    this.menuItems = GlobalVariables.MENU_ITEMS;
  }

  ngOnInit(): void {
  }

}
