import { Component } from '@angular/core';

@Component({
  selector: 'app-financing-options',
  templateUrl: './financing-options.component.html',
  styleUrls: ['./financing-options.component.css']
})
export class FinancingOptionsComponent {

  options = [
    {
      name: 'Business Loan',
      bestFor:
        'Fast and flexible funding for equipment purchases, expansion, new property, major spending, or refinancing existing loans.',
      feature: 'With or without collateral'
    },
    {
      name: 'Working Capital Loan',
      bestFor:
        'Overhead expenses such as payroll, rent & utilities, inventory, marketing, and cash-flow gaps.',
      feature: 'Short-term liquidity to stabilize cash flow'
    },
    {
      name: 'Project Financing',
      bestFor:
        'Capital-intensive infrastructure and industrial projects based on projected revenues and cash flows.',
      feature: 'Repayment linked to project cash flows'
    },
    {
      name: 'Credit Line',
      bestFor:
        'Fast access to funds up to a pre-approved limit. Repay only what is used.',
      feature: 'One application, multiple drawdowns'
    },
    {
      name: 'Check Rediscounting',
      bestFor:
        'Converting post-dated checks into immediate cash.',
      feature: 'Fast liquidity without waiting for check maturity'
    },
    {
      name: 'PO & Invoice Financing',
      bestFor:
        'Funding purchase orders and unlocking cash from unpaid invoices.',
      feature: 'Order fulfillment without upfront capital'
    }
  ];
}
