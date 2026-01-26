import { Component } from '@angular/core';

@Component({
  selector: 'app-credit-line-vs-business-loan',
  templateUrl: './credit-line-vs-business-loan.component.html',
  styleUrls: ['./credit-line-vs-business-loan.component.css']
})
export class CreditLineVsBusinessLoanComponent {

  rows = [
    {
      creditLine: 'One approval, multiple drawdowns. Access funds anytime up to your approved limit.',
      businessLoan: 'One-time funding for major projects. Receive the full loan amount upfront.'
    },
    {
      creditLine: 'Flexible funding needs. Draw only what you need, when you need it.',
      businessLoan: 'Structured repayment. Fixed monthly repayments over a set term.'
    },
    {
      creditLine: 'Manage cash flow fluctuations. Ideal for inventory, supplier payments, or short-term gaps.',
      businessLoan: 'Long-term investments. Perfect for projects that generate returns over time.'
    },
    {
      creditLine: 'Cost-efficient. Pay interest only on the amount used.',
      businessLoan: 'Predictable costs. Interest is calculated on the full loan amount.'
    },
    {
      creditLine: 'Quick access to capital. Fund new opportunities or urgent expenses instantly.',
      businessLoan: 'Planned growth. Suited for milestone-based or large-scale business initiatives.'
    }
  ];

  formatSentence(text: string) {
    const index = text.indexOf('.');
    if (index === -1) {
      return { first: text, rest: '' };
    }

    return {
      first: text.slice(0, index + 1),
      rest: text.slice(index + 1)
    };
  }

}
