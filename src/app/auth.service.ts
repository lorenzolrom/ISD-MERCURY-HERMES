import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { GlobalVariables } from "./globals";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwt;

  constructor(private http: HttpClient) {
    this.jwt = localStorage.getItem('access_token');
  }

  /**
   * Login the user
   * @param user {username, password}
   */
  loginUser(user) {
    return this.http.post<any>(GlobalVariables.API_URL + 'authenticate/v2/login', user);
  }

  isUserLoggedIn()
  {
    // is JWT set?
    if(this.jwt !== null)
    {
      // Is JWT still valid?
      let headers = new HttpHeaders({jwt: this.jwt});
      this.http.get<any>(GlobalVariables.API_URL + 'currentUser', {headers: headers}).subscribe(

      );

      return false;
  }
}
}
