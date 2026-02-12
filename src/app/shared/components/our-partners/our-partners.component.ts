import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.css']
})
export class OurPartnersComponent implements OnInit, OnDestroy {

  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  partners = [
    { logo: 'assets/img/partners/cmapi.png', name: 'CMAP' },
    { logo: 'assets/img/partners/bulacan-chamber.png', name: 'Bulacan Chamber' },
    { logo: 'assets/img/partners/transunion.png', name: 'TransUnion' },
    { logo: 'assets/img/partners/sec.png', name: 'SEC Philippines' }
  ];

  intervalId: any;
  currentIndex = 0;

  ngOnInit(): void {
    if (window.innerWidth <= 767) {
      setTimeout(() => {
        this.startAutoSlide();
      }, 500);
    }
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      const container = this.carousel.nativeElement;
      const card = container.querySelector('.partner-card');

      if (!card) return;

      const cardWidth = card.clientWidth + 14; // include gap

      this.currentIndex++;

      if (this.currentIndex > this.partners.length - 2) {
        this.currentIndex = 0;
      }

      container.scrollTo({
        left: cardWidth * this.currentIndex,
        behavior: 'smooth'
      });

    }, 2500);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
