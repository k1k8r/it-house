import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent, PostDetailsComponent } from './components';
import { PostsListContainer, PostDetailsContainer } from './containers';


@NgModule({
  declarations: [
    PostsListComponent,
    PostDetailsComponent,
    PostsListContainer,
    PostDetailsContainer,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
  ],
})
export class PostsModule { }
