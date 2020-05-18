import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
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
      catchError((error: HttpErrorResponse) => {
        let status = error.status;
        let errorMessage = '';

        if(error.error.errors !== undefined) // This is how IC returns errors
        {
          if(status === 401 || status === 403) // Permissions failure
          {
            if(error.error.errors.length === 1 && error.error.errors[0] == 'Session expired')
            {
              this.router.navigate(['/login']);
            }
            else
            {
              this.router.navigate(['/']);
            }
          }

          errorMessage = error.error.errors;
        }
        else
        {
          errorMessage = 'General Error';
        }

        this._snackBar.open(errorMessage, 'Dismiss');
        return throwError(errorMessage);
      })
    )
  };
}
