import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor {

  constructor(private _snackBar: MatSnackBar, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    return next.handle(req).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.error}`;
        } else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
        }
        this._snackBar.open(errorMessage, 'Dismiss', {duration: 3000});
        this.router.navigate(['/login']);
        return throwError(errorMessage);
      })
    )
  };
}
