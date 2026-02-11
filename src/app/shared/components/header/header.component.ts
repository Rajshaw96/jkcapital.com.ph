import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  offices: any[] = [];
  selectedOffice: any = null;
  searchCity: string = '';
  noResult: boolean = false;
  searchTimeout: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/data/offices.json')
    .subscribe(data => {
      this.offices = data;
    });
  }

  // 🔍 Auto search while typing
  onSearchChange() {

    // Clear previous timer
    clearTimeout(this.searchTimeout);

    const city = this.searchCity.trim().toLowerCase();

    // If empty → reset everything
    if (!city) {
      this.selectedOffice = null;
      this.noResult = false;
      return;
    }

    // Minimum 3 characters required
    if (city.length < 3) {
      this.selectedOffice = null;
      this.noResult = false;
      return;
    }

    // Debounce 300ms
    this.searchTimeout = setTimeout(() => {

      const found = this.offices.find(office =>
        office.cities.some((c: string) =>
          c.toLowerCase().includes(city)
        )
      );

      if (found) {
        this.selectedOffice = found;
      } else {
        // 🔥 Show message popup instead of hiding
        this.selectedOffice = {
          office: "No Office Found",
          message: `We currently do not have an office in "${this.searchCity}". Please contact our nearest branch.`
        };
      }

    }, 300);
  }

  // ❌ Close popup & clear search
  clearSearch() {
    this.selectedOffice = null;
    this.searchCity = '';
    this.noResult = false;
  }

  isMobileMenuOpen = false;
  activeDropdown: string | null = null;

  openDropdown(key: string) {
    this.activeDropdown = key;
  }

  closeDropdown() {
    this.activeDropdown = null;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
