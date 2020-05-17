import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { GlobalVariables } from "../globals";
import {LogoutService} from "../_services/logout.service";
import {User} from "../_models/user";
import {AuthService} from "../_services/auth.service";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav

  // Store menu items from Global
  menuItems;

  @Input() currentUser: User;

  constructor(private _logout: LogoutService, private _auth: AuthService) {
    this.menuItems = GlobalVariables.MENU_ITEMS;
  }

  ngOnInit(): void {
  }

  logout() {
    this.sidenav.close();
    this._logout.logout();
  }

  hasPermission(permission: string):boolean
  {
    return this._auth.hasPermission(permission);
  }
}
