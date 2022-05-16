import { NgModule } from '@angular/core';
import { FooterComponent } from '@core/components/footer/footer.component';
import { HeaderComponent } from '@core/components/header/header.component';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

import { BrowserModule } from '@angular/platform-browser';
import { NgHttpLoaderModule } from 'ng-http-loader';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    NgHttpLoaderModule.forRoot(),
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
