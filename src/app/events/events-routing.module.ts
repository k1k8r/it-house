import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsListContainer } from './containers/events-list/events-list.container';

const routes: Routes = [
  { path: '', component: EventsListContainer },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule { }
