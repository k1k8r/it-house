import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent, LoginComponent, RegistrationComponent } from './components';
import { LoginContainer, RegistrationContainer } from './containers';


@NgModule({
  declarations: [
    [
      AuthPageComponent,
      LoginComponent,
      RegistrationComponent,
    ],
    [
      LoginContainer,
      RegistrationContainer,
    ],
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
})
export class AuthModule { }
