import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';


import { PostsService } from '../../services/posts.service';
import { IPost } from '../../interfaces/post.interface';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-posts-container',
  templateUrl: './posts-list.container.html',
})
export class PostsListContainer implements OnInit {

  public readonly posts$!: Observable<IPost[]>;

  constructor(private _postsService: PostsService) {
    this.posts$ = this._postsService.list();
  }

  public ngOnInit(): void {
  }

}
