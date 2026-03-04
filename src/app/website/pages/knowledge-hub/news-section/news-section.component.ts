import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.css']
})
export class NewsSectionComponent implements OnInit {
  
  // Configuration
  itemsPerPage = 4;

  categories = [
    'Our Story & News',
    'Business Loans',
    'Finance 101',
    'Our Client Success'
  ];

  // Track the current page index for each category
  // Index 0 = First 4 blogs, Index 1 = Next 4, etc.
  categoryStep: { [key: string]: number } = {};

  newsData: any = {
    'Our Story & News': [
      { image:'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=500', title:'Market Trends: What to expect in 2024', date: 'Oct 12, 2023'},
      { image:'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=500', title:'How to scale your startup effectively', date: 'Oct 10, 2023'},
      { image:'https://images.unsplash.com/photo-1454165833767-027eeea15c3e?q=80&w=500', title:'The future of remote financial consulting', date: 'Oct 08, 2023'},
      { image:'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=500', title:'Understanding the basics of tax returns', date: 'Oct 05, 2023'},
      { image:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500', title:'5 Tips for better cashflow management', date: 'Oct 01, 2023'},
      { image:'https://images.unsplash.com/photo-1534951009808-dfd06b5d1c0c?q=80&w=500', title:'Why diversification is your best friend', date: 'Sept 28, 2023'},
      { image:'https://images.unsplash.com/photo-1551288049-bbbda536ad37?q=80&w=500', title:'Global economy: The mid-year review', date: 'Sept 20, 2023'},
      { image:'https://images.unsplash.com/photo-1551288049-bbbda536ad37?q=80&w=500', title:'Global economy: Part 2', date: 'Sept 20, 2023'},
    ],
    // Repeat data for other categories for demo purposes
    'Business Loans': [ /* ... same structure ... */ ],
    'Finance 101': [ /* ... same structure ... */ ],
    'Our Client Success': [ /* ... same structure ... */ ]
  };

  ngOnInit() {
    // Initialize all categories at step 0
    this.categories.forEach(cat => this.categoryStep[cat] = 0);
  }

  next(category: string) {
    if (this.canMoveForward(category)) {
      this.categoryStep[category]++;
    }
  }

  prev(category: string) {
    if (this.categoryStep[category] > 0) {
      this.categoryStep[category]--;
    }
  }

  canMoveForward(category: string): boolean {
    const totalItems = (this.newsData[category] || []).length;
    const maxSteps = Math.ceil(totalItems / this.itemsPerPage) - 1;
    return this.categoryStep[category] < maxSteps;
  }
}