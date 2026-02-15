import { Component } from '@angular/core';

interface ServiceItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-agriculture-sec2',
  templateUrl: './agriculture-sec2.component.html',
  styleUrls: ['./agriculture-sec2.component.css']
})

export class AgricultureSec2Component {
  
  services: ServiceItem[] = [
    { title: 'Business Loans', link: 'products/business-loans' },
    { title: 'Working Capital', link: 'products/working-capital-loan' },
    { title: 'Project Financing', link: 'products/project-financing' },
    { title: 'Line of Credit', link: 'products/credit-line' },
    { title: 'Invoice & Receivables Financing', link: 'products/receivables-financing' },
    { title: 'Check Rediscounting', link: 'products/check-rediscounting' }
  ];

  onPlayVideo() {
    console.log('Play video clicked!');
    // Add logic here to open a modal or play the actual video
  }
}