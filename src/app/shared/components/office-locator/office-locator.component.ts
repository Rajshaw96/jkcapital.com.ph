import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-office-locator',
  templateUrl: './office-locator.component.html',
  styleUrls: ['./office-locator.component.css']
})
export class OfficeLocatorComponent implements OnInit {
  offices: any[] = [];
  searchCity: string = '';
  selectedOffice: any = null;
  isLoading: boolean = false;
  hasSearched: boolean = false;
  searchTimeout: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Simulated data fetching
    this.http.get<any[]>('assets/data/offices.json').subscribe(data => {
      this.offices = data;
    });
  }

  onSearchChange() {
    clearTimeout(this.searchTimeout);
    const city = this.searchCity.trim().toLowerCase();

    if (!city || city.length < 3) {
      this.selectedOffice = null;
      this.hasSearched = false;
      this.isLoading = false;
      return;
    }

    this.isLoading = true;
    this.searchTimeout = setTimeout(() => {
      this.selectedOffice = this.offices.find(office =>
        office.cities.some((c: string) => c.toLowerCase().includes(city))
      );
      this.isLoading = false;
      this.hasSearched = true;
    }, 400); // Slight delay feels more "real"
  }

  clearSearch() {
    this.searchCity = '';
    this.selectedOffice = null;
    this.hasSearched = false;
  }
}