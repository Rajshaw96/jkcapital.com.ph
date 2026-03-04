import { Component } from '@angular/core';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.css']
})
export class NewsSectionComponent {

  categories = [
    'Our Story & News',
    'Business Loans',
    'Finance 101',
    'Our Client Success',
    'Loan Consultant'
  ];

  activeCategory = this.categories[0];

  batchSize = 4;
  startIndex = 0;

  newsData: any = {
    'Our Story & News': [
      { image: 'assets/img1.jpg', title: 'News Title 1' },
      { image: 'assets/img2.jpg', title: 'News Title 2' },
      { image: 'assets/img3.jpg', title: 'News Title 3' },
      { image: 'assets/img4.jpg', title: 'News Title 4' },
      { image: 'assets/img5.jpg', title: 'News Title 5' },
      { image: 'assets/img6.jpg', title: 'News Title 6' }
    ],

    'Business Loans': [
      { image: 'assets/img1.jpg', title: 'Loan Article 1' },
      { image: 'assets/img2.jpg', title: 'Loan Article 2' },
      { image: 'assets/img3.jpg', title: 'Loan Article 3' },
      { image: 'assets/img4.jpg', title: 'Loan Article 4' },
      { image: 'assets/img5.jpg', title: 'Loan Article 5' }
    ]
  };

  get visibleItems() {
    const items = this.newsData[this.activeCategory] || [];
    return items.slice(this.startIndex, this.startIndex + this.batchSize);
  }

  selectCategory(category: string) {
    this.activeCategory = category;
    this.startIndex = 0;
  }

  nextBatch() {
    const items = this.newsData[this.activeCategory] || [];

    if (this.startIndex + this.batchSize < items.length) {
      this.startIndex += this.batchSize;
    } else {
      this.startIndex = 0;
    }
  }

}