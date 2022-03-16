


export function appInitializer() {


    return () => new Promise((resolve) => {
        // wait for facebook sdk to initialize before starting the angular app
        // window['fbAsyncInit'] = function () {
        //     FB.init({
        //         appId: environment.facebookAppId,
        //         cookie: true,
        //         xfbml: true,
        //         version: 'v12.0'
        //     });


        //     //auto authenticate with the api if already logged in with facebook
        //     FB.getLoginStatus((response) => {

        //         if (response.status == 'connected') {

        //             authenticationService.apiAuthenticate(response.authResponse.accessToken)
        //                 .subscribe()
        //                 .add(resolve);
        //         } else {
        //             //     // attempt to refresh token on app start up to auto authenticate
        //             var current_user_data = JSON.parse(localStorage.getItem(MOODLE_CURRENT_USE)!)
        //             authenticationService.setUser(current_user_data)

        //             authenticationService.refreshToken()
        //                 .subscribe()
        //                 .add(resolve);
        //         }
        //         resolve('')
        //     });







        // };

        // load facebook sdk script
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            (js as any).src = "https://connect.facebook.net/en_US/sdk.js";
            (fjs as any).parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    });
    // return () => new Promise(resolve => {
    //     // attempt to refresh token on app start up to auto authenticate
    //     authenticationService.refreshToken()
    //         .subscribe()
    //         .add(resolve);
    // });
}
