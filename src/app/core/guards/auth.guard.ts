import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@core/authentication/auth.service';
//import { AuthenticationService } from '../_services/authentication.service';



@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService:AuthService    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const userData = this.authService.User
        const accessToken = this.authService.getAccesTokenFromLocalStorage()
        if (userData && accessToken) {
            // logged in so return true
            return true;
        } else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
}
