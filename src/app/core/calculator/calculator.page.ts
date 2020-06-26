import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  consumption: number = 0.00
  totalCalculated: number = 0.00

  constructor() { }

  ngOnInit() {
  }

  calculate() {
    let value = this.consumption
    let temp = 0
    let total = 0
    let tier1 = 17.5
    let tier2 = 18.5
    let tier3 = 33.0
    let tier4 = 44.5
    let tier5 = 45.0
    let tier6 = 47.0

    if (value <= 100) {
      total = value * tier1
      this.totalCalculated = total/100
    }
    else if (value >= 101 && value <= 200) {
      temp = 100 * tier1
      total = temp + (value-100)*tier2
      this.totalCalculated = total/100
    }
    else if (value >= 201 && value <= 300) {
      temp = 100 * tier1
      temp = temp + (100*tier2)
      total = temp + (value-200)*tier3
      this.totalCalculated = total/100
    }
    else if (value >= 301 && value <= 500) {
      temp = 100 * tier1
      temp = temp + (100*tier2)
      temp = temp + (100*tier3)
      total = temp + (value-300)*tier4
      this.totalCalculated = total/100
    }
    else if (value >= 501 && value <= 1000) {
      temp = 100 * tier1
      temp = temp + (100*tier2)
      temp = temp + (100*tier3)
      temp = temp + (100*tier4)
      total = temp + (value-500)*tier5
      this.totalCalculated = total/100
    }
    else if (value >= 1001) {
      temp = 100 * tier1
      temp = temp + (100*tier2)
      temp = temp + (100*tier3)
      temp = temp + (100*tier4)
      temp = temp + (100*tier5)
      total = temp + (value-1000)*tier6
      this.totalCalculated = total/100
    }
  }

}
