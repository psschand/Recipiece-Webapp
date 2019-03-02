import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginPageComponent} from './login-page/login-page.component';
import {CreateAccountPageComponent} from './create-account-page/create-account-page.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {LoggerModule} from 'ngx-logger';

@NgModule({
  imports: [
    HttpClientModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    LoginRoutingModule,
    LoggerModule,
  ],
  declarations: [
    LoginPageComponent,
    CreateAccountPageComponent,
  ],
})
export class LoginModule {
}
