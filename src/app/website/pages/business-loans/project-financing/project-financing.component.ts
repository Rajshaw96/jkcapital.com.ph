import { Component } from '@angular/core';

@Component({
  selector: 'app-project-financing',
  templateUrl: './project-financing.component.html',
  styleUrls: ['./project-financing.component.css']
})
export class ProjectFinancingComponent {
    solutions = [
    {
      title: 'Expansion and Development.',
      image: 'assets/img/pages/Project Financing/expansion and development.jpg',
      alt: 'Expansion and Development.',
      desc: 'For major initiatives like facility construction, equipment acquisition, or multi-branch rollouts that push your business to the next level.',
    },
    {
      title: 'High-Growth Sectors.',
      image: 'assets/img/pages/Project Financing/high growth sectors.jpg',
      alt: 'High-Growth Sectors.',
      desc: 'Tailored for industries such as construction, manufacturing, logistics, and real estate where bold investment drives results.',
    },
    {
      title: 'Strategic Growth Plans.',
      image: 'assets/img/pages/Project Financing/strategic growth plans.jpg',
      alt: 'Strategic Growth Plans.',
      desc: 'Structured, milestone-based funding that moves with your project from blueprint to breakthrough.',
    }
  ];
}
