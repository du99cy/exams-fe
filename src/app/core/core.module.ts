import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  APP_INITIALIZER,
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './authentication/auth.service';
import { AppConfig, APP_CONFIG } from './config';
import { AuthGuard } from './guards/auth.guard';
import { appInitializer } from './initializer/app.initializer';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [AuthService,Router],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ErrorInterceptor,
      multi: true,
    },
    AuthGuard,
    AuthService
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Please add it in AppModule only.'
      );
    }
  }

  static forRoot(conf?: AppConfig): ModuleWithProviders<any> {
    return {
      ngModule: CoreModule,
      providers: [{ provide: APP_CONFIG, useValue: conf }],
    };
  }
}
