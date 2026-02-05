import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-solutions',
  templateUrl: './loan-solutions.component.html',
  styleUrls: ['./loan-solutions.component.css']
})
export class LoanSolutionsComponent {
  solutions = [
    {
      title: 'Business Loans',
      image: 'assets/img/businesses/business-loans.jpeg',
      desc:
        'Secured or unsecured business loans for SMEs without extensive credit history, providing fast access to growth capital.',
      link: 'products/business-loans'
    },
    {
      title: 'Working Capital Loan',
      image: 'assets/img/businesses/working-capital-loan.jpeg',
      desc:
        'A short-term facility that gives liquidity for recurring expenses such as payroll and inventory.',
      link: 'products/working-capital-loan'
    },
    {
      title: 'Credit Line',
      image: 'assets/img/businesses/credit-line.jpeg',
      desc:
        'A revolving credit facility with a pre-approved limit. Pay interest only on the funds you use.',
      link: 'products/credit-line'
    },
    {
      title: 'Project Financing',
      image: 'assets/img/businesses/project-financing.jpeg',
      desc:
        'Specialized funding for large-scale industrial and infrastructure projects with long-term cash flow potential.',
      link: 'products/project-financing'
    },
    {
      title: 'Receivables Financing',
      image: 'assets/img/businesses/receivables-financing.jpeg',
      desc:
        'Turn unpaid invoices or customer purchase orders into instant capital while waiting for payments.',
      link: 'products/receivables-financing'
    },
    {
      title: 'Check Rediscounting',
      image: 'assets/img/businesses/check-rediscounting.jpeg',
      desc:
        'Turn post-dated checks into immediate funds to bridge liquidity gaps and stabilize operations.',
      link: 'products/check-rediscounting'
    }
  ];
}
