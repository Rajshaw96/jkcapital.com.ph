import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements AfterViewInit {

  index = 0;
  visibleCount = 4;

  testimonials = [
    {
      name: 'Nenita Aclan',
      role: 'Business Owner',
      message:
        'Nagamit ko ng maayos ang loan ko sa JK Capital Finance Inc., at nakatulong para mapaunlad ang aking negosyo.',
      rating: 5,
      image: 'assets/img/icons/Nenita.png',
      bg: 'bg-cream'
    },
    {
      name: 'Alex Alcantara',
      role: 'Store Owner',
      message:
        'Laking tulong sa akin ang JK Capital, nagamit ko ito sa aking working capital.',
      rating: 5,
      image: 'assets/img/icons/Alex.png',
      bg: 'bg-green'
    },
    {
      name: 'Edward Abad',
      role: 'Store Owner',
      message:
        'Many times tatawag lang ako sa office nila, mabilis sila kausap.',
      rating: 5,
      image: 'assets/img/icons/Edward.png',
      bg: 'bg-white'
    },
    {
      name: 'Jenilyn Sayson',
      role: 'Agent',
      message:
        'Thank you, JK Capital Finance, providing such a fast and smooth transaction experience.',
      rating: 4,
      image: 'assets/img/icons/Jenilyn.jpg',
      bg: 'bg-purple'
    }
  ];

  ngAfterViewInit() {
    this.play();
  }

  play() {
    document.documentElement.style.setProperty('--play', 'running');
  }

  pause() {
    document.documentElement.style.setProperty('--play', 'paused');
  }
}
