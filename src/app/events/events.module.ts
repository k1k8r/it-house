import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsListContainer } from './containers/events-list/events-list.container';
import { EventsListComponent } from './components/events-list/events-list.component';


@NgModule({
  declarations: [
    EventsListComponent,
    EventsListContainer,
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
  ],
})
export class EventsModule { }
