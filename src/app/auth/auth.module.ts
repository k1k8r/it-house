import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { RegistrationContainer } from './containers/registration/registration.container';
import { LoginContainer } from './containers/login/login.container';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthPageComponent,
    RegistrationContainer,
    LoginContainer,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
})
export class AuthModule { }
