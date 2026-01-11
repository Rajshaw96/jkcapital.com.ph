import { Component } from '@angular/core';

@Component({
  selector: 'app-project-financing-vs-business-loan',
  templateUrl: './project-financing-vs-business-loan.component.html',
  styleUrls: ['./project-financing-vs-business-loan.component.css']
})
export class ProjectFinancingVsBusinessLoanComponent {

  comparison = {
    leftTitle: 'Project Financing',
    rightTitle: 'Standard Business Loan',
    leftPoints: [
      'One-time funding for a specific project – released upfront to cover planned project costs.',
      'Milestone-based structure aligned with project revenue.',
      'Can leverage project-generated assets to support financing.',
      'Designed for large-scale, strategic growth initiatives.',
      'Tailored to support planned expansion, equipment acquisition, or multi-branch rollouts.'
    ],
    rightPoints: [
      'One-time funding – typically for general business needs or operational expenses.',
      'Fixed monthly repayments regardless of project performance.',
      'Backed by general business assets or balance sheet.',
      'Suited for operational or general capital needs.',
      'Less tailored for complex or high-investment projects.'
    ]
  };

}
