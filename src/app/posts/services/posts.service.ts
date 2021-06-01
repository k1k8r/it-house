import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IPost } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {

  private readonly _postsUrl = 'api/posts';

  constructor(private readonly _httpClient: HttpClient) { }

  public list(): Observable<IPost[]> {
    return this._httpClient.get<IPost[]>(this._postsUrl);
  }

  public get(id: number): Observable<IPost> {
    const currentPostUrl = `${this._postsUrl}/${id}`;

    return this._httpClient.get<IPost>(currentPostUrl);
  }

}
