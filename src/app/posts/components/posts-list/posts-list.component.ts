import { Component, Input } from '@angular/core';

import { IPost } from '../../interfaces/post.interface';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent {

  @Input()
  public posts!: IPost[] | null;

}
