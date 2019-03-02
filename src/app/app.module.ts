import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from './app-routing.module';
import {SidebarModule} from './components/sidebar/sidebar.module';
import {NavbarModule} from './components/navbar/navbar.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    SidebarModule,
    NavbarModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
