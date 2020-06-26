import { Component, OnInit } from '@angular/core';
import { faFileInvoice, faBolt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.page.html',
  styleUrls: ['./bills.page.scss'],
})
export class BillsPage implements OnInit {

  // Icon
  faBolt = faBolt
  faFileInvoice = faFileInvoice
  faIconStyle = {
    'color': 'RoyalBlue'
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    // console.log(faReceipt)
  }

  navigatePage(path: string) {
    this.router.navigate([path])
  }

}
