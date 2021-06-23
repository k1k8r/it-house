import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilePageContainer } from './containers/profile-page/profile-page.container';

const routes: Routes = [
  {
    path: '', component: ProfilePageContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule { }
