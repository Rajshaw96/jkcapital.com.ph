import { Component } from '@angular/core';

interface SpotlightItem {
  image: string;
  category: string;
  date: string;
  title: string;
}

@Component({
  selector: 'app-in-the-spotlight',
  templateUrl: './in-the-spotlight.component.html',
  styleUrls: ['./in-the-spotlight.component.css']
})
export class InTheSpotlightComponent {

  items: SpotlightItem[] = [
    {
      image: 'assets/img/spotlight-1.png',
      category: 'Business Loan',
      date: '15 OCT, 2025',
      title: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    },
    {
      image: 'assets/img/spotlight-2.png',
      category: 'Business Loan',
      date: '17 OCT, 2025',
      title: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    },
    {
      image: 'assets/img/spotlight-3.png',
      category: 'Small Business',
      date: '19 OCT, 2025',
      title: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    }
  ];
}
