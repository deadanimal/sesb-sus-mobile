import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  // Slider
  @ViewChild('introSlides', {static: false}) introSlides: any
  endReached: boolean = false
  imgLoaded: boolean = false
  sliderConfig = {
    centeredSlides: true,
    initialSlide: 0,
    speed: 400
  }
  slides = [
    { "image": "/assets/img/landing/smarthouse.svg", "text": "Electricity monitoring easier" },
    { "image": "/assets/img/landing/development.svg", "text": "Compare your usage" },
    { "image": "/assets/img/landing/events.svg", "text": "Outages notifcations at the tip of your fingers" },
    { "image": "/assets/img/landing/calendar.svg", "text": "Manage maintenances and monitor your appliances" }
  ];

  constructor(
    private router: Router,
    public menuCtrl: MenuController
  ) {
  }

  ngOnInit() {
    this.menuCtrl.enable(false) // Disable lateral menu
    this.imgLoaded = false
  }

  next() {
    this.introSlides.slideNext()
  }

  slideDidChange() {
    this.introSlides.isEnd().then(res => {
      this.endReached = res;
    })
  }

  navigatePage(path: string) {
    let navigationPath = '/' + path
    this.router.navigate([navigationPath])
  }

}
