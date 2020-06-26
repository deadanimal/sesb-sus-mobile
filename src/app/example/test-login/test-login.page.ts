import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-login',
  templateUrl: './test-login.page.html',
  styleUrls: ['./test-login.page.scss'],
})
export class TestLoginPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }

}
