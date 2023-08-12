import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CorsInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request and add the desired header
    const modifiedReq = req.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*',
      },
    });

    // Continue the request with the modified headers
    return next.handle(modifiedReq);
  }
}