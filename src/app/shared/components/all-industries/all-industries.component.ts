import { Component } from '@angular/core';

@Component({
  selector: 'app-all-industries',
  templateUrl: './all-industries.component.html',
  styleUrls: ['./all-industries.component.css']
})
export class AllIndustriesComponent {
  solutions = [
    {
      title: 'Agriculture',
      image: 'assets/img/pages/Industries/meeting-of-young-asian-business.jpg',
      desc: 'Seasonal cycles, weather risks, and rising input costs put constant pressure on agricultural businesses. You need financing that adapts to your operations, so you can modernize, and grow with confidence.',
      link: '/industries/agriculture'
    },
    {
      title: 'Construction & Building',
      image: 'assets/img/pages/Industries/meeting-of-young-asian-business.jpg',
      desc: 'Project timelines, payment delays, and material costs put pressure on cash flow. You need financing that keeps work moving without slowing you down.',
      link: '/industries/construction-building'
    },
    {
      title: 'Distribution & Wholesale Solutions',
      image: 'assets/img/pages/Industries/meeting-of-young-asian-business.jpg',
      desc: 'Inventory cycles, supplier terms, and logistics costs demand steady cash flow. You need financing that moves as fast as your goods.',
      link: '/industries/distribution-wholesale-solutions'
    },
    {
      title: 'Infrastructure & Industrial',
      image: 'assets/img/pages/Industries/meeting-of-young-asian-business.jpg',
      desc: 'Capital-intensive inventory, long sales cycles, and large-ticket transactions define your business. You need financing that keeps equipment moving and opportunities within reach.',
      link: '/industries/infrastructure-industrial'
    },
    {
      title: 'Manufacturing & Production',
      image: 'assets/img/pages/Industries/meeting-of-young-asian-business.jpg',
      desc: 'Rising costs, production demands, and expansion plans require dependable capital. You need financing that supports output without disrupting operations.',
      link: '/industries/manufacturing-production'
    },
    {
      title: 'Pharmaceutical & Medical',
      image: 'assets/img/pages/Industries/meeting-of-young-asian-business.jpg',
      desc: 'High-value inventory, strict compliance, and hospital demand require dependable financing. You need capital that supports scale without disruption.',
      link: '/industries/pharmaceutical-medical'
    },
    {
      title: 'Renewable Energy',
      image: 'assets/img/pages/Industries/meeting-of-young-asian-business.jpg',
      desc: 'Project-based timelines and technology investments require flexible capital. You need financing aligned with growth, sustainability, and execution.',
      link: '/industries/renewable-energy'
    },
    {
      title: 'Professional Services',
      image: 'assets/img/pages/Industries/meeting-of-young-asian-business.jpg',
      desc: 'Growth, expansion, and ownership transitions require smart financial planning. You need a financing partner who understands service-based businesses and values clarity and discretion.',
      link: '/industries/professional-services'
    },
    {
      title: 'Retail',
      image: 'assets/img/pages/Industries/meeting-of-young-asian-business.jpg',
      desc: 'From inventory buildup to seasonal demand and multi-location expansion, retail businesses face constant cash flow pressure. You need financing that keeps shelves stocked and growth plans moving.',
      link: '/industries/retail'
    }
  ];
}
