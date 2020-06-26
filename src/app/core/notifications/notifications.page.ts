import { Component, OnInit } from '@angular/core';
import { faBell } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  // Icon
  faBell = faBell
  faIconStyle = {
    'color': 'RoyalBlue'
  }

  constructor() { }

  ngOnInit() {
  }

}
