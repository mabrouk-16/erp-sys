import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth/auth.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadComponent: () => AuthComponent },
  { path: 'home', loadComponent: () => HomePageComponent },
];
