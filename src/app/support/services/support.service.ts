import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ISupport } from '../interfaces/support.interface';
import { ISection } from '../interfaces/section.interface';

@Injectable({
  providedIn: 'root',
})

export class SupportService {

  private readonly _supportUrl = 'api/support/';

  constructor(private _httpClient: HttpClient) { }

  public send(message: any): Observable<object> {
    message = this.form(message);

    return this._httpClient.post(this._supportUrl, message);
  }

  public list(): Observable<ISection[]> {
    return this._httpClient.get<ISection[]>(this._supportUrl);
  }

  public form(formValue: ISupport): FormData {
    const formData = new FormData();
    const title = formValue.title;
    const content = formValue.content;
    const section: any = formValue.section;
    const file: any = formValue.file;

    formData.append('title', title);
    formData.append('content', content);
    formData.append('section', section);
    formData.append('file', file);

    return formData;
  }

}
