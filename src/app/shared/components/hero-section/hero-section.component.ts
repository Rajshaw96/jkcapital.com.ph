import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
    @Input() title =
    'Explore loans up to ₱ 1,000,000.00 to meet the needs of your small business.';
    @Input() subtitle =
      'Small business loans that fuel Philippine-sized ambitions';
    @Input() buttonText = 'Apply Now';
    @Input() buttonLink = '/industries';
    @Input() image = 'assets/images/loan-hero.jpg';
}

