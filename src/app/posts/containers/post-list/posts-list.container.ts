import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { PostsService } from '../../services/posts.service';
import { IPost } from '../../interfaces/post.interface';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-list.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsListContainer {

  public readonly posts$!: Observable<IPost[]>;

  constructor(private _postsService: PostsService) {
    this.posts$ = this._postsService.list();
  }

}
