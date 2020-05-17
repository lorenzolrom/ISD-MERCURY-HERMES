import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../_services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    let user = this.auth.currentUserValue;
    if(user && user.accessToken)
    {
      req = req.clone({
        setHeaders: {
          jwt: `${user.accessToken}`
        }
      });
    }

    return next.handle(req);
  };
}
