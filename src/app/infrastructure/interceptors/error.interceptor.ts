import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          // Handle specific error codes or messages here
          if (error.status === 500) {
            this.toastr.error('Internal Server Error', 'Error');
          } else if (error.status === 400) {
            this.toastr.error('Bad Request', 'Error');
            
          } 
          else if (error.status === 401) {
            this.toastr.error('Unauthorized', 'Error');
          }
          else {
            this.toastr.error(error.message, 'Error');
          }
        }

        // You can also log the error
        console.error('HTTP Error:', error);

        // Pass the error along for further handling
        return throwError(error);
      })
    );
  }
}
