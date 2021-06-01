import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { IPost } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent {

  @Input() public post!: IPost | null;

}
