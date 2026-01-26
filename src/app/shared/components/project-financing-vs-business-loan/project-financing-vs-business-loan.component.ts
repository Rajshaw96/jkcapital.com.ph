import { Component } from '@angular/core';

@Component({
  selector: 'app-project-financing-vs-business-loan',
  templateUrl: './project-financing-vs-business-loan.component.html',
  styleUrls: ['./project-financing-vs-business-loan.component.css']
})
export class ProjectFinancingVsBusinessLoanComponent {

  rows = [
    {
      projectFinancing: 'One-time funding for a specific project – released upfront to cover planned project costs.',
      standardBusinessLoan: 'One-time funding – typically for general business needs or operational expenses.'
    },
    {
      projectFinancing: 'Milestone-based structure aligned with project revenue.',
      standardBusinessLoan: 'Fixed monthly repayments regardless of project performance.'
    },
    {
      projectFinancing: 'Can leverage project-generated assets to support financing.',
      standardBusinessLoan: 'Backed by general business assets or balance sheet.'
    },
    {
      projectFinancing: 'Designed for large-scale, strategic growth initiatives.',
      standardBusinessLoan: 'Suited for operational or general capital needs.'
    },
    {
      projectFinancing: 'Tailored to support planned expansion, equipment acquisition, or multi-branch rollouts.',
      standardBusinessLoan: 'Less tailored for complex or high-investment projects.'
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
