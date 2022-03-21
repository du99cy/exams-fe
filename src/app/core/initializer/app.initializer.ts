import { Router } from '@angular/router';
import { AuthService } from '@core/authentication/auth.service';

export function appInitializer(authService: AuthService, router: Router) {
  //get access token from localStorage
  let accessToken = authService.getAccesTokenFromLocalStorage();

  //if not null get refresh token and get user infor

  return () =>
    new Promise((resolve: any) => {
      if (accessToken) {
        //get new token
        authService
          .refreshToken()
          .subscribe((res) => {
            //get user information
            authService.userInfor().subscribe();
          })
          .add(resolve);
      }
      resolve();
    });
}
