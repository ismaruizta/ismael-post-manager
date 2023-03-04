import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  
  constructor(private spinner:SpinnerService){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.show(); // Show the spinner before the request is made

    return next.handle(request).pipe(
        finalize(() => {
            this.spinner.hide(); // Hide the spinner after the response is received
        })
    );
  }
}
