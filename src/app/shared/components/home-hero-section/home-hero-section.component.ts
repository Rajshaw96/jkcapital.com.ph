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
      btnLink: '/industries',
      image: 'assets/img/banner/jk-home-banner.png',
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
      image: 'assets/img/banner/jk-home-banner (1).jpg',
    },
    {
      title: 'Non-collateral business loans from PHP300K to PHP50M.',
      desclist: [
        { value: 'Same-day application & screening' },
        { value: '5-day loan approval' }
      ],
      btn: 'EXPLORE OUR LOAN SOLUTIONS',
      btnLink: '/industries',
      image: 'assets/img/banner/jk-home-banner (2).jpg',
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
    }, 6000);
  }

  setSlide(index: number): void {
    this.activeIndex = index;
    clearInterval(this.intervalId);
    this.startAutoSlide();
  }
}
