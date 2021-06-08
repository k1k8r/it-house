import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsLoggedInGuard } from '../auth/guards/is-logged-in.guard';
import { IsNotLoggedInGuard } from '../auth/guards/is-not-logged-in.guard';

import { PostsListContainer } from './containers/post-list/posts-list.container';
import { PostDetailsContainer } from './containers/post-details/post-details.container';


const routes: Routes = [
  { path: '', component: PostsListContainer, canActivate: [IsNotLoggedInGuard] },
  { path: ':id', component: PostDetailsContainer, canActivate: [IsLoggedInGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule { }
