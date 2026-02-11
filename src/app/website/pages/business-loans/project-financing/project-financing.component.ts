import { Component } from '@angular/core';

@Component({
  selector: 'app-project-financing',
  templateUrl: './project-financing.component.html',
  styleUrls: ['./project-financing.component.css']
})
export class ProjectFinancingComponent {
    solutions = [
    {
      title: 'Expansion and development',
      image: 'assets/img/pages/Project Financing/expansion and development.jpg',
      alt: 'Expansion and development',
      desc: 'For major initiatives like facility construction, equipment acquisition, or multi-branch rollouts that push your business to the next level.',
    },
    {
      title: 'High-growth sectors',
      image: 'assets/img/pages/Project Financing/high growth sectors.jpg',
      alt: 'High-growth sectors',
      desc: 'Tailored for industries such as construction, manufacturing, logistics, and real estate where bold investment drives results.',
    },
    {
      title: 'Strategic growth plans',
      image: 'assets/img/pages/Project Financing/strategic growth plans.jpg',
      alt: 'Strategic growth plans',
      desc: 'Structured, milestone-based funding that moves with your project from blueprint to breakthrough.',
    }
  ];
}
