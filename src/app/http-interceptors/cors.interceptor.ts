import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class CorsInterceptor implements HttpInterceptor {
  constructor(private usuarioService: UsuarioService){}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const token = this.usuarioService.getToken();
    let modifiedReq: HttpRequest<any> = req;
    
    if (token) {
      modifiedReq = req.clone({ 
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      })
    }

    return next.handle(modifiedReq).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Erro: ', error.error.message);
    } else {
      console.log(
        `Erro Status: ${error.status}, ` +
        `Mensagem: ${JSON.stringify(error.error)}}`
      )
    }
    return throwError('Algo deu errado');
  }
}