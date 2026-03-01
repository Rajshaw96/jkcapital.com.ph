import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-industry-grid',
  templateUrl: './industry-grid.component.html',
  styleUrls: ['./industry-grid.component.css']
})
export class IndustryGridComponent {
  
  industries = [
    { title: 'Agriculture', desc: 'Seasonal cash flow, long cycles', icon: 'wheat.svg',  link: '/industries/agriculture'},
    { title: 'Construction', desc: 'Progress billings, delayed payments', icon: 'location_city.svg', link: '/industries/construction-building' },
    { title: 'Distributions', desc: 'Inventory-heavy, thin margins', icon: 'local_shipping.svg', link: '/industries/distribution-wholesale-solutions' },
    { title: 'Industrial', desc: 'Large orders, long timelines', icon: 'factory.svg', link: '/industries/infrastructure-industrial' },
    { title: 'Manufacturing', desc: 'Upfront costs, predictable output', icon: 'warehouse.svg', link: '/industries/manufacturing-production' },
    { title: 'Pharmaceutical', desc: 'Regulatory timelines, high compliance', icon: 'pill.svg', link: '/industries/pharmaceutical-medical' },
    { title: 'Professional Services', desc: 'Payroll-heavy, project-based work', icon: 'person_apron.svg', link: '/industries/professional-services' },
    { title: 'Renewable Energy', desc: 'High capex, long-term returns', icon: 'local_gas_station.svg', link: '/industries/renewable-energy' },
    { title: 'Retail', desc: 'Fast turnover, seasonal peaks', icon: 'local_convenience_store.svg', link: '/industries/retail' },
    { title: 'Technology', desc: 'Fast growth, income in bursts', icon: 'precision_manufacturing.svg', link: '/industries/technology' },
  ];

  // Helper method to construct the asset path
  getIconPath(fileName: string): string {
    return `assets/img/icons/${fileName}`;
  }
}