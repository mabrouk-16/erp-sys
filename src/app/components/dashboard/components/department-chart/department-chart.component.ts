import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-department-chart',
  imports: [],
  templateUrl: './department-chart.component.html',
  styleUrl: './department-chart.component.scss',
})
export class DepartmentChartComponent {
  public chart: any;

  ngOnInit() {
    this.createChart();
  }
  createChart() {
    let delayed: any;
    this.chart = new Chart('PolarChart', {
      type: 'polarArea',
      data: {
        labels: [
          'Software Developer',
          'AI Developer',
          'Department Manger',
          'Indoor Sales',
          'Network Developer',
          'Other',
        ], // X-axis labels
        datasets: [
          {
            label: 'Gender',
            // Name of the first dataset
            data: [5, 7, 4, 10, 5, 15], // Values for each corresponding label
            backgroundColor: [
              'rgba(8, 71, 154, 0.58)',
              'rgba(8, 154, 57, 0.58)',
              'rgba(154, 8, 8, 0.58)',
              'rgba(154, 142, 8, 0.58)',
              'rgba(154, 8, 139, 0.58)',
            ], // Color of the bars
          },
        ],
      },
      options: {
        scales:{
          
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Employee',
          },
        },
        responsive: true,
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context: any) => {
            let delay = 0;
            if (
              context.type === 'data' &&
              context.mode === 'default' &&
              !delayed
            ) {
              delay = context.dataIndex * 300 + context.datasetIndex * 200;
            }
            return delay;
          },
        },
      },
    });
  }
}
