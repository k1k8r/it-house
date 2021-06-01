import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';

const routes: Routes = [
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: RegistrationComponent },
  { path: '', component: AuthPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
