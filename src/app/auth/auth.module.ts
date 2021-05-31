import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthPageComponent } from './auth-page/auth-page.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    AuthPageComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
})
export class AuthModule { }
