import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private _auth: AuthService, private router: Router) { }

  public logout() {
    this._auth.logout();
    this.router.navigate(['/login']);
  }
}
