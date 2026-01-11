import { Component } from '@angular/core';

interface InfoCard {
  icon: string;
  title: string;
  description?: string[];
  orderedList?: string[];
  optionalTitle?: string;
  optionalList?: string[];
}

@Component({
  selector: 'app-process-eligibility',
  templateUrl: './process-eligibility.component.html',
  styleUrls: ['./process-eligibility.component.css']
})
export class ProcessEligibilityComponent {

    cards: InfoCard[] = [
    {
      icon: 'assets/img/icons/Our_Process.png',
      title: 'Our Process',
      description: [
        'STEP 1: Apply online & submit all requirements.',
        'STEP 2: Get pre-screened the same day with a call from our team.',
        'STEP 3: Get approval in 5–7 days after completion of requirements.'
      ]
    },
    {
      icon: 'assets/img/icons/Our_Eligibility_Criteria.png',
      title: 'Our Eligibility Criteria',
      orderedList: [
        'Business operational for at least 1 year',
        'Bank account active for at least 1 year',
        'Age: 20–70 years old (co-maker/co-borrower may be required)'
      ]
    },
    {
      icon: 'assets/img/icons/Our_Requirements.png',
      title: 'Our Requirements',
      orderedList: [
        'Business DTI & Mayor’s permit',
        'Financial statement',
        'Past 3-month bank statement'
      ],
      optionalTitle: 'To strengthen terms (optional):',
      optionalList: [
        'Income statement',
        'Partner contracts'
      ]
    }
  ];
  
}
