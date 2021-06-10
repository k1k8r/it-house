import { Component, Input } from '@angular/core';

import { IEvent } from '../../interfaces/event.inerface';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent {

  @Input()
  public events!: IEvent[] | null;

}
