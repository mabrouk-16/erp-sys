import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-users-chart',
  imports: [],
  templateUrl: './users-chart.component.html',
  styleUrl: './users-chart.component.scss',
})
export class UsersChartComponent {
  public chart: any;

  constructor() {}

  ngOnInit() {
    this.createChart();
  }
  createChart() {
    let delayed: any;
    this.chart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'], // X-axis labels
        datasets: [
          {
            label: 'Active Users', // Name of the first dataset
            data: [12, 19, 3, 5, 2], // Values for each corresponding label
            backgroundColor: 'rgba(0, 192, 43, 0.58)', // Color of the bars
            // borderColor: 'rgb(0, 184, 34)', // Border color of the bars
            // borderWidth: 1, // Border width
          },
          {
            label: 'InActive Users', // Name of the second dataset
            data: [2, 3, 20, 5, 1], // Values for each corresponding label
            backgroundColor: 'rgba(47, 155, 226, 0.58)', // Color of the bars
            // borderColor: 'rgb(13, 148, 238)', // Border color of the bars
            // borderWidth: 1, // Border width
          },
          {
            label: 'Active Users',
            data: [3, 10, 13, 15, 22],
            backgroundColor: 'rgba(211, 79, 42, 0.58)', // Color of the bars
            // borderColor: 'rgb(244, 71, 19)', // Border color of the bars
            // borderWidth: 1, // Border width
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Company Users',
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
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
              delay = context.dataIndex * 500 + context.datasetIndex * 200;
            }
            return delay;
          },
        },
      },
    });
  }
}
