import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-compare-usage',
  templateUrl: './compare-usage.page.html',
  styleUrls: ['./compare-usage.page.scss'],
})
export class CompareUsagePage implements OnInit {

  // Chart
  @ViewChild("barCanvas") barCanvas: ElementRef;
  private barChart: Chart;

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getChart()
  }

  getChart() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "horizontalBar",
      data: {
        datasets: [
          {
            label: "Similar Homes",
            data: [186],
            backgroundColor: [
              "rgba(255, 99, 132)"
            ],
            borderColor: [
              "rgba(255,99,132,1)"
            ],
            borderWidth: 1
          },
          {
            label: "Neighbourhood",
            data: [211],
            backgroundColor: [
              "rgba(54, 162, 235)"
            ],
            borderColor: [
              "rgba(54, 162, 235, 1)"
            ],
            borderWidth: 1
          },
          {
            label: "Your Home",
            data: [186],
            backgroundColor: [
              "rgba(255, 206, 86)"
            ],
            borderColor: [
              "rgba(255, 206, 86, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        legend: {
          display: true,
          position: "bottom"
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

}
