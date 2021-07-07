import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsLoggedInGuard, IsNotLoggedInGuard } from '@auth/guards';
const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('./posts').then((m) => m.PostsModule),
  },
  {
    path: 'events',
    loadChildren: () => import('./events').then((m) => m.EventsModule),
  },
  {
    path: 'support',
    loadChildren: () => import('./support').then((m) => m.SupportModule),
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile').then((m) => m.ProfileModule),
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth').then((m) => m.AuthModule),
    canActivate: [IsNotLoggedInGuard],
  },
  {
    path: 'home',
    loadChildren: () => import('./home').then((m) => m.HomeModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
