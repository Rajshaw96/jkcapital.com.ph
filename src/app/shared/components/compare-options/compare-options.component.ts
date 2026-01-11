import { Component } from '@angular/core';

interface CompareRow {
  label: string;
  secured: string;
  unsecured: string;
}

@Component({
  selector: 'app-compare-options',
  templateUrl: './compare-options.component.html',
  styleUrls: ['./compare-options.component.css']
})
export class CompareOptionsComponent {

  rows: CompareRow[] = [
    {
      label: 'Collateral Required',
      secured: 'Yes – backed by property, equipment, or other assets.',
      unsecured: 'None required.'
    },
    {
      label: 'Loan Amount',
      secured: 'From ₱300K to ₱50M – typically higher within the range, depending on collateral value.',
      unsecured: 'From ₱300K to ₱50M – moderate within the range, based on business cash flow.'
    },
    {
      label: 'Interest Rate',
      secured: 'From 2.5% to 3.5% – lower within the range due to reduced lending risk.',
      unsecured: 'From 2.5% to 3.5% – slightly higher within the range.'
    },
    {
      label: 'Approval Time',
      secured: 'From 5 to 7 days – may take longer with asset evaluation.',
      unsecured: 'Around 5 to 7 days, with minimal documentation.'
    },
    {
      label: 'Best For',
      secured: 'Expansion, equipment purchase, long-term plans.',
      unsecured: 'Working capital and short-term funding needs.'
    },
    {
      label: 'Repayment Terms',
      secured: 'Up to 12 months.',
      unsecured: 'Shorter, fixed terms.'
    },
    {
      label: 'Basis for Approval',
      secured: 'Asset value and business performance.',
      unsecured: 'Credit standing and cash flow consistency.'
    }
  ];
}
