import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ProfilePageContainer } from './containers/profile-page/profile-page.container';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfilePageContainer,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
  ],
})
export class ProfileModule { }
