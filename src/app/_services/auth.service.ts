import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { GlobalVariables } from "../globals";
import { map } from "rxjs/operators";
import {User} from "../_models/user";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User
  {
    return this.currentUserSubject.value;
  }

  /**
   * @param form {username, password}
   */
  login(form) {
    return this.http.post<any>(GlobalVariables.API_URL + 'authenticate/v2/login', form).pipe(
      map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );

  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  hasPermission(permission: string): boolean {
    if(permission.length < 1)
      return true;

    return this.currentUserSubject.value.permissions.indexOf(permission) !== -1;
  }
}
