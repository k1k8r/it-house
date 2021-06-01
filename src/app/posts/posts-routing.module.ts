import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsListContainer } from './containers/post-list/posts-list.container';

const routes: Routes = [
  { path: '', component: PostsListContainer },
  { path: ':id', component: PostDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule { }
