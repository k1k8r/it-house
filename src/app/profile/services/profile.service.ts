import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IProfile } from '../intefaces';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  private readonly _profileUrl = 'api/profile/';

  constructor(private _httpClient: HttpClient) { }

  public get(): Observable<IProfile> {
    return this._httpClient.get<IProfile>(this._profileUrl);
  }

  public update(formData: IProfile): Observable<IProfile> {
    return this._httpClient.put<IProfile>(this._profileUrl, formData);
  }

}
