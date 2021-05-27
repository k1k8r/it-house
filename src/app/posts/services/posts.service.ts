import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { IPost } from '../interfaces/post.interface';



@Injectable({
  providedIn: 'root',
})
export class PostsService {

  private readonly _postsUrl = 'api/posts';

  constructor(private readonly _http: HttpClient) { }

  public getPosts(): Observable<IPost[]> {
    return this._http.get<IPost>(this._postsUrl)
      .pipe(
        pluck('posts'),
      );
  }

}
