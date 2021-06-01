import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { IPost } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-post-details-container',
  templateUrl: './post-details.container.html',
})
export class PostDetailsContainer implements OnInit {

  public readonly post$!: Observable<IPost>;

  constructor(private _postsService: PostsService, private _activatedRoute: ActivatedRoute) {
    const id = +this._activatedRoute.snapshot.params.id;

    this.post$ = this._postsService.get(id);
  }

  public ngOnInit(): void {
  }

}
