import { Component } from '@angular/core';

interface SpotlightItem {
  image: string;
  category: string;
  date: string;
  title: string;
  link?: string;
}

@Component({
  selector: 'app-in-the-spotlight',
  templateUrl: './in-the-spotlight.component.html',
  styleUrls: ['./in-the-spotlight.component.css']
})
export class InTheSpotlightComponent {

  items: SpotlightItem[] = [
    {
      image: 'assets/img/blogs/blog-img-1.png',
      category: 'Business Breakthrough',
      date: 'January 19, 2026',
      title: 'Excelucent Equipment Corporation Secures Growth Funding from JK Capital Finance',
      link: 'https://jkcapital.com.ph/our-blog/excelucent-equipment-corporation-secures-growth-funding-from-jk-capital-finance/'
    },
    {
      image: 'assets/img/blogs/blog-img-2.jpg',
      category: 'Business Loans',
      date: 'December 19, 2025',
      title: 'The Challenge: traditional bank loans take months. JK Capital solution: SME financing in 5-7 days',
      link: 'https://jkcapital.com.ph/our-blog/the-challenge-traditional-bank-loans-take-months-jk-capital-solution-sme-financing-in-5-7-days/'
    },
    {
      image: 'assets/img/blogs/blog-img-3.jpg',
      category: 'Business Loans',
      date: 'November 19, 2025',
      title: 'Beyond Capital: Powering SME Growth in 2025 with JK Capital Financing Solutions',
      link: 'https://jkcapital.com.ph/our-blog/beyond-capital-powering-sme-growth-in-2025-with-jk-capital-financing-solutions/'
    }
  ];
}
