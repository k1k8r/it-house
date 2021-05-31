import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home').then((m) => m.HomeModule),
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts').then((m) => m.PostsModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth').then((m) => m.AuthModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
