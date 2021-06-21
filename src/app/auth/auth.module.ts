import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import {
  AuthPageComponent,
  LoginComponent,
  RegistrationComponent,
} from './components';
import { LoginContainer, RegistrationContainer } from './containers';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    [AuthPageComponent, LoginComponent, RegistrationComponent],
    [LoginContainer, RegistrationContainer],
  ],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule],
})
export class AuthModule {

  public static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
          deps: [AuthService],
        },
        AuthService,
      ],
    };
  }

}
