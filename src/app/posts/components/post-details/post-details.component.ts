import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PostsService } from '../../services/posts.service';
import { IPost } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit, OnDestroy {

  public title = 'Подробнее';
  public post!: any;

  private readonly _$destroy = new Subject<void>();

  constructor(
    private _route: ActivatedRoute,
    private _postsService: PostsService,
  ) {}

  public ngOnInit(): void {
    this._getBook();
  }

  public ngOnDestroy(): void {
    this._$destroy.next();
    this._$destroy.complete();
  }

  private _getBook(): void {
    const id = +this._route.snapshot.params.id;

    this._postsService.getPost(id)
      .pipe(
        takeUntil(this._$destroy),
      )
      .subscribe((post) => this.post = post);
  }

}
