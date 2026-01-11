import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta-banner',
  templateUrl: './cta-banner.component.html',
  styleUrls: ['./cta-banner.component.css']
})
export class CtaBannerComponent {

  @Input() title: string = 'Choose your loan application method.';
  @Input() primaryText: string = 'Connect With Our Loan Experts';
  @Input() secondaryText: string = 'Apply Online';

  @Input() primaryLink: string = '/industries';
  @Input() secondaryLink: string = '/loan-application';

  @Input() backgroundImage: string =
    'assets/images/cta-bg.jpg';
}
