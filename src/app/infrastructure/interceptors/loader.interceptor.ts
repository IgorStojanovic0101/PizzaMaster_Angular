import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, delay, finalize, throwError } from 'rxjs';
import { LoaderService } from 'src/app/presentation/services/loader/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.busy();
    return next.handle(req).pipe(
      delay(1000),
      finalize(() => {
        this.loaderService.idle();
      })
    );
  }
}
