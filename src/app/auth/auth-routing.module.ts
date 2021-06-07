import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationContainer } from './containers/registration/registration.container';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { LoginContainer } from './containers/login/login.container';

const routes: Routes = [
  { path: 'signin', component: LoginContainer },
  { path: 'signup', component: RegistrationContainer },
  { path: '', component: AuthPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
