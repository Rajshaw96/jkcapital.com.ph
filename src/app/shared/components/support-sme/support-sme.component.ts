import { Component } from '@angular/core';

interface EarnOption {
  icon: string;
  title: string;
  percent: string;
  points: string[];
  ctaText: string;
  link: string;
}

@Component({
  selector: 'app-support-sme',
  templateUrl: './support-sme.component.html',
  styleUrls: ['./support-sme.component.css']
})
export class SupportSmeComponent {

  options: EarnOption[] = [
    {
      icon: 'assets/img/icons/starter-referrer.png',
      title: 'Starter Referrer',
      percent: '1%',
      points: [
        '1% commission on every new successful loan.',
        'You refer, we do the rest.',
        'First referral done? Level up to become an Affiliate Referrer.'
      ],
      ctaText: 'REFER NOW',
      link: '/starter-referrer'
    },
    {
      icon: 'assets/img/icons/affiliate-referrer.png',
      title: 'Affiliate Referrer',
      percent: '1%++',
      points: [
        '1% commission on each successful loan.',
        '1% commission on 2nd and 3rd-level referrals.',
        'Earn from repeat and renewal loans.',
        'Promote us on your social media to grow income.'
      ],
      ctaText: 'REGISTER & REFER NOW',
      link: '/affiliate-referrer'
    },
    {
      icon: 'assets/img/icons/pro-consultant.png',
      title: 'Pro Loan Consultant',
      percent: '3%++',
      points: [
        '3% commission on each new successful loan.',
        '1% commission on 2nd and 3rd-level referrals.',
        'Up to 2% commission on renewal loans.',
        'Manage the full loan process and earn more.'
      ],
      ctaText: 'APPLY AS A LOAN CONSULTANT',
      link: '/pro-loan-consultant'
    }
  ];
}

