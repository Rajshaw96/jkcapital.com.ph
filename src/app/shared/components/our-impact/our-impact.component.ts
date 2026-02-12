import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-our-impact',
  templateUrl: './our-impact.component.html',
  styleUrls: ['./our-impact.component.css']
})
export class OurImpactComponent implements OnInit, OnDestroy {
  activeIndex = 1;
  intervalId: any;

  // Swipe gesture tracking
  touchStartX = 0;
  touchEndX = 0;

  // Modal control
  showVideo = false;
  activeVideoUrl: SafeResourceUrl | null = null;

  testimonials = [
    {
      headline: 'The Veteran Loan Consultant',
      subheadLine: 'A closer look, Era Tapar, JK Capital’s loan consultant whose years of experience and client relationships continue to guide SMEs toward smarter financial decision.',
      image: 'assets/img/pages/Our Impact/LC ERA TAPAR COVER.jpg',
      video: 'https://www.youtube.com/embed/uV-lEbcPBUc?si=UIVYD6DuaqpBGP0d'
    },
    {
      headline: 'PHILSME 2025 ',
      subheadLine: 'Highlights from PHILSME 2025, capturing conversations, connections, and shared insights among SME leaders.',
      image: 'assets/img/testimonials/testimonials-img (1).jpg',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      headline: 'The Resilient Partner',
      subheadLine: 'The story of Jeffrey Calpe, a loan consultant who adapted to change and continues to support growing businesses with resilience, trust, and long-term vision.',
      image: 'assets/img/testimonials/testimonials-img (3).jpg',
      video: 'https://www.youtube.com/embed/Vq4QbAj4HDk?si=5nzjI4yOB0rPe5xR'
    }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => this.next(), 5000);
  }

  resetAutoSlide(): void {
    clearInterval(this.intervalId);
    this.startAutoSlide();
  }

  prev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.resetAutoSlide();
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
    this.resetAutoSlide();
  }

  getPosition(index: number): string {
    if (index === this.activeIndex) return 'active';
    if (index === (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length) return 'left';
    if (index === (this.activeIndex + 1) % this.testimonials.length) return 'right';
    return 'hidden';
  }

  // FIXED VIDEO LOGIC
  openVideo(url: string) {
    if (!url) {
      console.error("No video URL provided!");
      return;
    }
    // This allows Angular to trust the URL
    this.activeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.showVideo = true;
    clearInterval(this.intervalId); // Stop carousel when watching
  }

  closeVideo() {
    this.showVideo = false;
    this.activeVideoUrl = null;
    this.startAutoSlide();
  }

  /* Swipe Support */
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
    if (this.touchEndX < this.touchStartX - 50) this.next();
    if (this.touchEndX > this.touchStartX + 50) this.prev();
  }
}