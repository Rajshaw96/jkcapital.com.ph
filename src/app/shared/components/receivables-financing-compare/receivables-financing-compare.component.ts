import { Component } from '@angular/core';

interface CompareRow {
  label: string;
  businessLoan: string;
  receivablesFinancing: string;
}

@Component({
  selector: 'app-receivables-financing-compare',
  templateUrl: './receivables-financing-compare.component.html',
  styleUrls: ['./receivables-financing-compare.component.css']
})
export class ReceivablesFinancingCompareComponent {

  rows: CompareRow[] = [
    {
      label: 'Funding Basis',
      businessLoan: 'Backed by business performance, collateral, or credit standing.',
      receivablesFinancing: 'Backed by verified receivables, invoices, or POs.'
    },
    {
      label: 'Disbursement',
      businessLoan: 'One-time lump sum.',
      receivablesFinancing: 'Based on receivables or invoices submitted.'
    },
    {
      label: 'Repayment',
      businessLoan: 'Fixed monthly payments with interest on the full amount.',
      receivablesFinancing: 'Automatically settled when your customers pay.'
    },
    {
      label: 'Best For',
      businessLoan: 'Expansion, equipment, long-term projects.',
      receivablesFinancing: 'Bridging gaps between billing and collection.'
    },
    {
      label: 'Collateral Requirement',
      businessLoan: 'Often required for higher amounts.',
      receivablesFinancing: 'May be unsecured; receivables act as security.'
    },
    {
      label: 'Approval Time',
      businessLoan: 'Typically 5-7 days.',
      receivablesFinancing: 'Can be faster, depending on invoice validation.'
    }
  ];
}
