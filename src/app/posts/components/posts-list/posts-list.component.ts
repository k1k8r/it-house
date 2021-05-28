import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PostsService } from '../../services/posts.service';
import { IPost } from '../../interfaces/post.interface';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit, OnDestroy {

  public title = 'Новости';
  public posts: IPost[] = [];

  private readonly _$destroy = new Subject<void>();

  constructor(private _postsService: PostsService) { }

  public ngOnInit(): void {
    this._getPosts();
  }

  public ngOnDestroy(): void {
    this._$destroy.next();
    this._$destroy.complete();
  }

  private _getPosts(): void {
    this._postsService.getPosts()
      .pipe(
        takeUntil(this._$destroy),
      )
      .subscribe((posts) => this.posts = posts);
  }

}
