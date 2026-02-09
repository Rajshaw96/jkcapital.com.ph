import { Component } from '@angular/core';

@Component({
  selector: 'app-working-capital-loan',
  templateUrl: './working-capital-loan.component.html',
  styleUrls: ['./working-capital-loan.component.css']
})
export class WorkingCapitalLoanComponent {
  solutions = [
    {
      title: 'Why SMEs Need This',
      image: 'assets/img/pages/Working Capital/Why SMEs Need This.jpg',
      alt: 'Why SMEs Need This',
      desc: 'Unexpected bills, seasonal slowdowns, and delayed payments can strain operations; this loan keeps you prepared for anything.',
    },
    {
      title: 'How It Helps with Cash Flow Gaps',
      image: 'assets/img/pages/Working Capital/How it helps with cashflow gaps.jpg',
      alt: 'How It Helps with Cash Flow Gaps',
      desc: 'Flexible funds cover urgent costs, from payroll to inventory, bridging gaps and smoothing out cash flow fluctuations.',
    },
    {
      title: 'Quick Access in 5–7 Days',
      image: 'assets/img/pages/Working Capital/Quick Access in 5-7 Days.jpg',
      alt: 'Quick Access in 5–7 Days',
      desc: 'Get approved in as little as a week and access funds fast, so your business never misses a beat.',
    }
  ];
}
