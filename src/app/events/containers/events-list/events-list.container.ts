import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { IEvent } from '../../interfaces/event.inerface';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-events-list-container',
  templateUrl: './events-list.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsListContainer {

  public readonly events$!: Observable<IEvent[]>;

  constructor(private _eventsService: EventService) {
    this.events$ = this._eventsService.list();
  }

}
