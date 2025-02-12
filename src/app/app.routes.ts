import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth/auth.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'auth',
    loadComponent: () => AuthComponent,
  },
  {
    path: 'home',
    loadComponent: () => HomePageComponent,
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
