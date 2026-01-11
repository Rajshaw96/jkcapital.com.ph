import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit, OnDestroy {

  ourTeams = [
    { teams: 'assets/img/our-team/team-1.jpg'},
    { teams: 'assets/img/our-team/team-2.jpg'},
    { teams: 'assets/img/our-team/team-3.jpg'},
    { teams: 'assets/img/our-team/team-4.jpg'},
    { teams: 'assets/img/our-team/team-5.png'},
  ];

  duplicatedOurTeams: any[] = [];
  intervalId: any;

  ngOnInit(): void {
    // duplicate list for infinite loop
    this.duplicatedOurTeams = [...this.ourTeams, ...this.ourTeams];
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      const track = document.querySelector('.partners-track') as HTMLElement;
      if (!track) return;

      track.style.transition = 'transform 0.6s linear';
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

