import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-hero-section',
  templateUrl: './home-hero-section.component.html',
  styleUrls: ['./home-hero-section.component.css']
})
export class HomeHeroSectionComponent implements OnInit, OnDestroy {

  activeIndex = 0;
  intervalId!: any;

  slides = [
    {
      title: 'We diagnose. We solve. We customise.',
      desc: 'More than capital — we bring clarity to your business challenges, bridge financial gaps, and craft solutions that help you thrive in a changing world.',
      btn: 'EXPLORE OUR LOAN SOLUTIONS',
      btnLink: '/help-center',
      image: 'assets/img/businesses/check-re-discounting.jpeg',
    },
    {
      title: 'Beyond capital, behind your next breakthrough.',
      desc: 'Bridging gaps, building gains.',
      stats: [
        { value: '10+', label: 'Years of Service' },
        { value: '10K+', label: 'SMEs Reached' }
      ],
      btn: 'EXPLORE OUR LOAN SOLUTIONS',
      btnLink: '/industries',
      image: 'assets/img/businesses/credit-line.jpeg',
    },
    {
      title: 'Non-collateral business loans from PHP300K to PHP50M.',
      desc: 'Same-day application & screening | 5-day loan approval',
      btn: 'EXPLORE OUR LOAN SOLUTIONS',
      btnLink: '/help-center',
      image: 'assets/img/businesses/business-loans.jpeg',
    }
  ];


  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.activeIndex =
        (this.activeIndex + 1) % this.slides.length;
    }, 4000);
  }

  setSlide(index: number): void {
    this.activeIndex = index;
    clearInterval(this.intervalId);
    this.startAutoSlide();
  }
}
