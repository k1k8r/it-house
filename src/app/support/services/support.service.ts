import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ISupport } from '../interfaces/support.interface';

@Injectable({
  providedIn: 'root',
})

export class SupportService {

  private readonly _supportUrl = 'api/support/';

  constructor(private _httpClient: HttpClient) { }

  public send(message: ISupport): Observable<object> {
    return this._httpClient.post(this._supportUrl, message);
  }

}
