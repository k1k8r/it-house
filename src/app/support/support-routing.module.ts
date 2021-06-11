import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SupportPageContainer } from './containers/support-page/support-page.container';

const routes: Routes = [
  { path: '', component: SupportPageContainer },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportRoutingModule { }
