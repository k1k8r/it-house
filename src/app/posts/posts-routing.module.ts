import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsLoggedInGuard } from '../auth/guards/is-logged-in.guard';

import { PostsListContainer, PostDetailsContainer } from './containers';


const routes: Routes = [
  { path: '', component: PostsListContainer },
  { path: ':id', component: PostDetailsContainer, canActivate: [IsLoggedInGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule { }
