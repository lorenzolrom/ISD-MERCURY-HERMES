import { Component } from '@angular/core';
import {AuthService} from "./_services/auth.service";
import {User} from "./_models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: User;
  title = 'hermes';

  constructor(private _auth: AuthService) {
    this._auth.currentUser.subscribe(x =>this.currentUser = x);

    this._auth.isLoggedIn();
  }
}
