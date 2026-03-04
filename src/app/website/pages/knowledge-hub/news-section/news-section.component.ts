import { Component } from '@angular/core';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.css']
})
export class NewsSectionComponent {

  batchSize = 4;

  categories = [
    'Our Story & News',
    'Business Loans',
    'Finance 101',
    'Our Client Success',
    'Loan Consultant'
  ];

  startIndex: any = {};

  newsData: any = {

    'Our Story & News': [
      { image:'assets/img1.jpg', title:'News Title 1'},
      { image:'assets/img2.jpg', title:'News Title 2'},
      { image:'assets/img3.jpg', title:'News Title 3'},
      { image:'assets/img4.jpg', title:'News Title 4'},
      { image:'assets/img5.jpg', title:'News Title 5'}
    ],

    'Business Loans': [
      { image:'assets/img1.jpg', title:'Loan Article 1'},
      { image:'assets/img2.jpg', title:'Loan Article 2'},
      { image:'assets/img3.jpg', title:'Loan Article 3'},
      { image:'assets/img4.jpg', title:'Loan Article 4'},
      { image:'assets/img5.jpg', title:'Loan Article 5'}
    ],

    'Finance 101': [
      { image:'assets/img1.jpg', title:'Finance Article 1'},
      { image:'assets/img2.jpg', title:'Finance Article 2'},
      { image:'assets/img3.jpg', title:'Finance Article 3'},
      { image:'assets/img4.jpg', title:'Finance Article 4'},
      { image:'assets/img5.jpg', title:'Finance Article 5'}
    ]

  };


  getVisibleItems(category:string){

    if(!this.startIndex[category]){
      this.startIndex[category] = 0;
    }

    const items = this.newsData[category] || [];

    return items.slice(
      this.startIndex[category],
      this.startIndex[category] + this.batchSize
    );
  }


  nextBatch(category:string){

    const items = this.newsData[category] || [];

    if(this.startIndex[category] + this.batchSize < items.length){
      this.startIndex[category] += this.batchSize;
    }else{
      this.startIndex[category] = 0;
    }

  }

}