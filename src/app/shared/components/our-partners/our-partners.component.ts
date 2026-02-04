import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.css']
})
export class OurPartnersComponent implements OnInit, OnDestroy {

  partners = [
    { logo: 'assets/img/partners/cmapi.png', name: 'CMAP' },
    { logo: 'assets/img/partners/bulacan-chamber.png', name: 'Bulacan Chamber' },
    { logo: 'assets/img/partners/transunion.png', name: 'TransUnion' },
    { logo: 'assets/img/partners/sec.png', name: 'SEC Philippines' }
  ];

  duplicatedPartners: any[] = [];
  intervalId: any;

  ngOnInit(): void {
    // duplicate list for infinite loop
    this.duplicatedPartners = [...this.partners, ...this.partners];
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      const track = document.querySelector('.partners-track') as HTMLElement;
      if (!track) return;

      track.style.transition = 'transform 0.8s linear';
      track.style.transform = `translateX(-200px)`;

      setTimeout(() => {
        track.style.transition = 'none';
        track.appendChild(track.firstElementChild as HTMLElement);
        track.style.transform = 'translateX(0)';
      }, 600);
    }, 2500);
  }

  pause(): void {
    clearInterval(this.intervalId);
  }

  resume(): void {
    this.startAutoSlide();
  }
}
