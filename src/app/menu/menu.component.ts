import {Component, Input, OnInit} from '@angular/core';
import {GlobalVariables} from '../globals';
import {User} from "../_models/user";
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() currentUser: User;
  @Input() userHasPermission: Function;

  menuItems;

  constructor(private _auth: AuthService) {
    this.menuItems = GlobalVariables.MENU_ITEMS;
  }

  ngOnInit(): void {
    console.log(this.currentUser);
  }

  hasPermission(permission: string): boolean {
    return this._auth.hasPermission(permission);
  }
}
