import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ApiService} from "../_services/api.service";
import {GlobalVariables} from "../globals";

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  resetData = {
    old: '',
    new: '',
    confirm: ''
  };

  constructor(private _snackBar: MatSnackBar, private http: ApiService ) { }

  ngOnInit(): void {
  }

  resetPassword(){
    return this.http.put('currentUser/changepassword', this.resetData).subscribe(
      () => this._snackBar.open('Password changed', 'DISMISS', {duration: GlobalVariables.NOTIFICIATION_DURATION})
    );
  }

}
