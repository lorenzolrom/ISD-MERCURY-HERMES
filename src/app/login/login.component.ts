import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

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

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.auth.loginUser(this.loginData).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
