import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-industry-grid',
  templateUrl: './industry-grid.component.html',
  styleUrls: ['./industry-grid.component.css']
})
export class IndustryGridComponent {
  
  industries = [
    { title: 'Agriculture', desc: 'Seasonal cash flow, long cycles', icon: 'wheat.svg' },
    { title: 'Construction', desc: 'Progress billings, delayed payments', icon: 'location_city.svg' },
    { title: 'Distributions', desc: 'Inventory-heavy, thin margins', icon: 'local_shipping.svg' },
    { title: 'Industrial', desc: 'Large orders, long timelines', icon: 'factory.svg' },
    { title: 'Manufacturing', desc: 'Upfront costs, predictable output', icon: 'warehouse.svg' },
    { title: 'Pharmaceutical', desc: 'Regulatory timelines, high compliance', icon: 'pill.svg' },
    { title: 'Professional Services', desc: 'Payroll-heavy, project-based work', icon: 'person_apron.svg' },
    { title: 'Renewable Energy', desc: 'High capex, long-term returns', icon: 'local_gas_station.svg' },
    { title: 'Retail', desc: 'Fast turnover, seasonal peaks', icon: 'local_convenience_store.svg' },
    { title: 'Technology', desc: 'Fast growth, income in bursts', icon: 'precision_manufacturing.svg' }
  ];

  // Helper method to construct the asset path
  getIconPath(fileName: string): string {
    return `assets/img/icons/${fileName}`;
  }
}