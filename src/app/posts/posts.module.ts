import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListContainer } from './containers/post-list/posts-list.container';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';


@NgModule({
  declarations: [
    PostsListContainer,
    PostDetailsComponent,
    PostsListComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
  ],
})
export class PostsModule { }
