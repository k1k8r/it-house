import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IEvent } from '../interfaces/event.inerface';

@Injectable({
  providedIn: 'root',
})
export class EventService {

  private readonly _eventsUrl = 'api/events/';

  constructor(private _httpClient: HttpClient) { }

  public list(): Observable<IEvent[]> {
    return this._httpClient.get<IEvent[]>(this._eventsUrl);
  }

}
