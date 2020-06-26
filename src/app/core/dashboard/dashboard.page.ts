import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  // Slider
  sliderConfig = {
    initialSlide: 0,
    autoplay: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    }
  };

  // Icon
  faBolt = faBolt
  faIconStyle = {
    'color': 'RoyalBlue'
  }

  // Image
  graphic1 = 'assets/img/card/graphic1.png'
  graphic2 = 'assets/img/card/graphic2.png'
  graphic3 = 'assets/img/card/graphic3.png'
  graphic4 = 'assets/img/card/graphic4.png'

  // Chart
  @ViewChild("barCanvas") barCanvas: ElementRef;
  private barChart: Chart;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getChart()
  }

  navigatePage(path: string) {
    this.router.navigate([path])
  }

  getChart() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr"],
        datasets: [
          {
            label: "Bill: RM",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132)",
              "rgba(54, 162, 235)",
              "rgba(255, 206, 86)",
              "rgba(75, 192, 192)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

}
