import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: ''
  }

  constructor(private _auth: AuthService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  loginUser() {
    this._auth.loginUser(this.loginData).subscribe(
      res => this.loginSuccess(res),
      err => this.loginFailure(err)
    );
  }

  // Process successful login
  loginSuccess(res)
  {
    // Assign JWT to localstorage
    localStorage.setItem('access_token', res.access_token);
    this._snackBar.open('Successfully logged in');
  }

  // Process failed login
  loginFailure(err)
  {
    this._snackBar.open(err.error.errors);
  }

}
