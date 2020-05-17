import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GlobalVariables } from "./globals";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  /**
   * Login the user
   * @param user {username, password}
   */
  loginUser(user) {
    return this.http.post<any>(GlobalVariables.API_URL + 'authenticate/v2/login', user);
  }
}
