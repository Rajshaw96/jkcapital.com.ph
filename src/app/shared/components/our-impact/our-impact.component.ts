import {Component, OnInit, OnDestroy } from '@angular/core';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@Component({
  selector: 'app-our-impact',
  templateUrl: './our-impact.component.html',
  styleUrls: ['./our-impact.component.css']
})
export class OurImpactComponent implements OnInit, OnDestroy {

  activeIndex = 1;
  intervalId!: any;

  // swipe
  touchStartX = 0;
  touchEndX = 0;

  // modal
  showVideo = false;
  activeVideoUrl = '';

  testimonials = [
    {
      name: 'Samite',
      role: 'Business Owner',
      image: 'assets/img/testimonials/testimonials-img (1).jpg',
      video: ''
    },
    {
      name: 'Kaity',
      role: 'Fashion Director',
      image: 'assets/img/testimonials/testimonials-img (2).jpg',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      name: 'Rayan',
      role: 'Photographer',
      image: 'assets/img/testimonials/testimonials-img (3).jpg',
      video: ''
    }
  ];

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  /* ---------- Carousel ---------- */
  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.next();
    }, 4000);
  }

  resetAutoSlide(): void {
    clearInterval(this.intervalId);
    this.startAutoSlide();
  }

  prev(): void {
    this.activeIndex =
      (this.activeIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
    this.resetAutoSlide();
  }

  next(): void {
    this.activeIndex =
      (this.activeIndex + 1) % this.testimonials.length;
    this.resetAutoSlide();
  }

  getPosition(index: number): string {
    if (index === this.activeIndex) return 'active';

    if (
      index ===
      (this.activeIndex - 1 + this.testimonials.length) %
        this.testimonials.length
    )
      return 'left';

    if (
      index ===
      (this.activeIndex + 1) %
        this.testimonials.length
    )
      return 'right';

    return 'hidden';
  }

  /* ---------- Swipe ---------- */
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  handleSwipe(): void {
    if (this.touchEndX < this.touchStartX - 50) {
      this.next();
    }
    if (this.touchEndX > this.touchStartX + 50) {
      this.prev();
    }
  }

  /* ---------- Video Modal ---------- */
  openVideo(url: string): void {
    if (!url) return;
    this.activeVideoUrl = url;
    this.showVideo = true;
    clearInterval(this.intervalId);
  }

  closeVideo(): void {
    this.showVideo = false;
    this.activeVideoUrl = '';
    this.startAutoSlide();
  }
}

