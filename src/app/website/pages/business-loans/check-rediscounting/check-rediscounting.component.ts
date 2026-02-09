import { Component } from '@angular/core';

@Component({
  selector: 'app-check-rediscounting',
  templateUrl: './check-rediscounting.component.html',
  styleUrls: ['./check-rediscounting.component.css']
})
export class CheckRediscountingComponent {
  solutions = [
    {
      title: 'What Is Check Rediscounting for SMEs',
      image: 'assets/img/pages/Check Rediscounting/what is check rediscounting.jpg',
      alt: 'What Is Check Rediscounting for SMEs',
      desc: 'Check Rediscounting allows businesses to advance cash from post-dated or deposited checks. It accelerates access to funds already expected, giving you quicker liquidity.',
    },
    {
      title: 'How This Helps with Cashflow Gaps',
      image: 'assets/img/pages/Check Rediscounting/how this helps with cashflow gaps.jpg',
      alt: 'How This Helps with Cashflow Gaps',
      desc: 'Bridge timing gaps between payouts and incoming collections. Use the advanced funds to cover payroll, purchase inventory, or manage unexpected operational needs.',
    },
    {
      title: 'Similarities with Invoice or PO Financing',
      image: 'assets/img/pages/Check Rediscounting/similarities with invoice.jpg',
      alt: 'Similarities with Invoice or PO Financing',
      desc: 'Like Invoice and PO Financing, Check Rediscounting converts expected payments into working capital. The difference? It’s based on issued checks, making it ideal when receivables are already formalized and dated.',
    }
  ];
}
