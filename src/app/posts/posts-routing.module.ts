import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsListContainer, PostDetailsContainer } from './containers';


const routes: Routes = [
  { path: '', component: PostsListContainer },
  { path: ':id', component: PostDetailsContainer },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule { }
