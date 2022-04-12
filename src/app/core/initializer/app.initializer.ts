import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '@core/authentication/auth.service';
import { environment } from '@environment/environment';

export function appInitializer(authService: AuthService) {
  return () =>
    new Promise((resolve:any) => {

      // wait for facebook sdk to initialize before starting the angular app
      window['fbAsyncInit'] = function () {
        FB.init({
          appId: environment.facebookAppId,
          cookie: true,
          xfbml: true,
          version: 'v8.0',
        });

        // auto authenticate with the api if already logged in with facebook
        FB.getLoginStatus(({ authResponse }) => {
          //if previous facebook login then auto login with facebook access token
          if (authResponse) {

            authService.apiAuthenticateFB(authResponse.accessToken).subscribe().add(resolve)

          } else {

            //else check previous mail login then check access token that saved in local storage
            //get access token from localStorage
            let accessToken = authService.getAccesTokenFromLocalStorage();

            //if not null get refresh token and get user infor
            if (accessToken) {
              //get new token
              authService.refreshToken().subscribe((res) => {
                //get user information
                authService.userInfor().subscribe().add(resolve);
              },
              (err:HttpErrorResponse)=>{
                resolve()
              });
            }
            else
              resolve()


          }
        });
      };

      // load facebook sdk script
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        (js as any).src = 'https://connect.facebook.net/en_US/sdk.js';
        (fjs as any).parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');

      //resolve(null);
    });

}
