import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth/auth.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { authGuard } from './services/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UrlsNames } from './models/shared';
import { DepartmentComponent } from './components/department/department.component';

export const routes: Routes = [
  { path: '', redirectTo: `${UrlsNames.home}`, pathMatch: 'full' },
  {
    path: `${UrlsNames.auth}`,
    loadComponent: () => AuthComponent,
  },
  {
    path: `${UrlsNames.home}`,
    loadComponent: () => HomePageComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: `${UrlsNames.dashboard}`, pathMatch: 'full' },
      {
        path: `${UrlsNames.dashboard}`,
        loadComponent: () => DashboardComponent,
      },
      {
        path: `${UrlsNames.department}`,
        loadComponent: () => DepartmentComponent,
      },
    ],
  },
  { path: '**', redirectTo: `${UrlsNames.home}`, pathMatch: 'full' },
];
