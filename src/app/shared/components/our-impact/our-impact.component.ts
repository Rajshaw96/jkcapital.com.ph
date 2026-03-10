import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var YT: any;

@Component({
  selector: 'app-our-impact',
  templateUrl: './our-impact.component.html',
  styleUrls: ['./our-impact.component.css']
})
export class OurImpactComponent implements OnInit, AfterViewInit {
  activeIndex = 0;
  player: any;

  // swipe
  touchStartX = 0;
  touchEndX = 0;

  testimonials = [
    {
      headline: 'The Veteran Loan Consultant',
      subheadLine: 'A closer look, Era Tapar, JK Capital’s loan consultant whose years of experience and client relationships continue to guide SMEs.',
      image: 'assets/img/pages/Our Impact/LC ERA TAPAR COVER.jpg',
      videoId: 'uV-lEbcPBUc'
    },
    {
      headline: 'PHILSME 2025',
      subheadLine: 'Highlights from PHILSME 2025, capturing conversations and connections among SME leaders.',
      image: 'assets/img/testimonials/viber_image_2026-02-13_14-28-04-285.jpg',
      videoId: 'F6ZNV08y7MY'
    },
    {
      headline: 'The Resilient Partner',
      subheadLine: 'The story of Jeffrey Calpe, a loan consultant who continues supporting growing businesses.',
      image: 'assets/img/testimonials/jeffrey-calpe.jpeg',
      videoId: 'Vq4QbAj4HDk'
    }
  ];

  ngOnInit(): void {
    this.loadYoutubeAPI();
  }

  ngAfterViewInit(): void {

    (window as any).onYouTubeIframeAPIReady = () => {
      this.createPlayer(this.testimonials[this.activeIndex].videoId);
    };

  }

  /* LOAD YOUTUBE API */

  loadYoutubeAPI() {

    if ((window as any).YT) return;

    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

  }

  /* CREATE PLAYER */

  createPlayer(videoId: string) {

    setTimeout(() => {

      if (this.player) {
        this.player.destroy();
      }

      this.player = new YT.Player('activeVideoPlayer', {

        videoId: videoId,

        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 1,
          rel: 0
        },

        events: {

          onStateChange: (event: any) => {

            // 0 = video ended
            if (event.data === 0) {

              this.next();

              setTimeout(() => {
                this.createPlayer(
                  this.testimonials[this.activeIndex].videoId
                );
              }, 500);

            }

          }

        }

      });

    }, 200);

  }

  /* SLIDER CONTROLS */

  next() {
    this.activeIndex =
      (this.activeIndex + 1) % this.testimonials.length;

    setTimeout(() => {
      this.createPlayer(
        this.testimonials[this.activeIndex].videoId
      );
    }, 200);
  }

  prev() {
    this.activeIndex =
      (this.activeIndex - 1 + this.testimonials.length) %
      this.testimonials.length;

    setTimeout(() => {
      this.createPlayer(
        this.testimonials[this.activeIndex].videoId
      );
    }, 200);
  }

  getPosition(index: number): string {

    if (index === this.activeIndex) return 'active';

    if (index === (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length)
      return 'left';

    if (index === (this.activeIndex + 1) % this.testimonials.length)
      return 'right';

    return 'hidden';

  }

  /* SWIPE SUPPORT */

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent): void {

    this.touchEndX = event.changedTouches[0].screenX;

    if (this.touchEndX < this.touchStartX - 50) this.next();
    if (this.touchEndX > this.touchStartX + 50) this.prev();

  }

}