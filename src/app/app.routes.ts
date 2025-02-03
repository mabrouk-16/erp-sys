import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth/auth.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth',pathMatch:'full' },
  { path: 'auth', loadComponent: () => AuthComponent },
];
