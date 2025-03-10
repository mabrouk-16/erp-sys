import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-gender-chart',
  imports: [],
  templateUrl: './gender-chart.component.html',
  styleUrl: './gender-chart.component.scss',
})
export class GenderChartComponent {
  public chart: any;

  ngOnInit() {
    this.createChart();
  }
  createChart() {
    let delayed: any;
    this.chart = new Chart('PieChart', {
      type: 'pie',
      data: {
        labels: ['Male', 'Female'], // X-axis labels
        datasets: [
          {
            label: 'Gender',
            // Name of the first dataset
            data: [25, 4], // Values for each corresponding label
            backgroundColor: ['rgba(8, 71, 154, 0.58)', 'rgba(197, 6, 9, 0.63)'], // Color of the bars
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: false,
            text: '',
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
              delay = context.dataIndex * 300 + context.datasetIndex * 200;
            }
            return delay;
          },
        },
      },
    });
  }
}
