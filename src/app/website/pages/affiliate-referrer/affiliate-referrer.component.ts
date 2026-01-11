import { Component } from '@angular/core';

@Component({
  selector: 'app-affiliate-referrer',
  templateUrl: './affiliate-referrer.component.html',
  styleUrls: ['./affiliate-referrer.component.css']
})
export class AffiliateReferrerComponent {
    activeTab: 'signup' | 'refer' = 'signup';
}
