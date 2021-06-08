import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { IPost } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-details-container',
  templateUrl: './post-details.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailsContainer {

  public readonly post$!: Observable<IPost>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _postsService: PostsService,
  ) {
    const id = +this._activatedRoute.snapshot.params.id;

    this.post$ = this._postsService.get(id);
  }

}
