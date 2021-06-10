import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthPageComponent } from './components';
import { LoginContainer, RegistrationContainer } from './containers';

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
