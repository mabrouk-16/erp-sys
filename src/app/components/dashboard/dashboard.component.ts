import { Component } from '@angular/core';
import { UsersChartComponent } from './components/users-chart/users-chart.component';
import { GenderChartComponent } from './components/gender-chart/gender-chart.component';
import { DepartmentChartComponent } from './components/department-chart/department-chart.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    UsersChartComponent,
    GenderChartComponent,
    DepartmentChartComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
