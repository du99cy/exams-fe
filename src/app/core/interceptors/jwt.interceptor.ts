import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url

        if (true) {
            // var jwt_token = localStorage.getItem(MOODLE_JWT_TOKEN)
            // jwt_token = jwt_token!==null?JSON.parse(jwt_token):''
            request = request.clone({
                setHeaders: { Authorization: `Bearer Quang du` }
            });
        }

        return next.handle(request);
    }
}
