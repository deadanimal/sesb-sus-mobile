import { Component, OnInit } from '@angular/core';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-payment',
  templateUrl: './bill-payment.page.html',
  styleUrls: ['./bill-payment.page.scss'],
})
export class BillPaymentPage implements OnInit {

  constructor(
    private toastr: NotifyService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  makePayment() {
    let message = 'Payment has been made'
    this.toastr.openToastr(message)
    this.router.navigate(['/core/bills'])
  }

}
