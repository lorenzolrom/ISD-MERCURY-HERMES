import { Component, OnInit } from '@angular/core';
import { AuthService } from "../_services/auth.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import {first} from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";

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

  nextUrl: string;

  constructor(private _auth: AuthService, private _snackBar: MatSnackBar, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.nextUrl = this.route.snapshot.queryParams['nextUrl'] || '/';
  }

  loginUser() {
    this._auth.login(this.loginData).pipe(first()).subscribe(
      data => {
        this.router.navigate([this.nextUrl]);
      },
      error => {
        this._snackBar.open(error)
      }
    );
  }
}
