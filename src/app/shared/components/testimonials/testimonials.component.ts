import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonials = [
    {
      name: 'Nenita Aclan',
      role: 'Business Owner',
      message: 'Nagamit ko ng maayos ang loan ko sa JK Capital Finance Inc., at nakatulong para mapaunlad ang aking negosyo.',
      rating: 5,
      image: 'assets/img/icons/Nenita.png'
    },
    {
      name: 'Alex Alcantara',
      role: 'Store Owner',
      message: 'Laking tulong sa akin ang JK Capital, nagamit ko ito sa aking working capital.',
      rating: 5,
      image: 'assets/img/icons/Alex.png'
    },
    {
      name: 'Edward Abad',
      role: 'Store Owner',
      message: 'Many times tatawag lang ako sa office nila, mabilis sila kausap. Highly recommended.',
      rating: 5,
      image: 'assets/img/icons/Edward.png'
    },
    {
      name: 'Jenilyn Sayson',
      role: 'Agent',
      message: 'Thank you, JK Capital Finance, providing such a fast and smooth transaction experience.',
      rating: 4,
      image: 'assets/img/icons/Jenilyn.jpg'
    }
  ];

  ngOnInit() {}

  play() {
    document.documentElement.style.setProperty('--play', 'running');
  }

  pause() {
    document.documentElement.style.setProperty('--play', 'paused');
  }
}