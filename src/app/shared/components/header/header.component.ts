import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  offices: any[] = [];
  selectedOffice: any = null;
  searchCity: string = '';
  noResult: boolean = false;
  searchTimeout: any;
  activeMobileSubmenu: string | null = null;
  private dropdownTimer: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/data/offices.json').subscribe((data) => {
      this.offices = data;
    });
  }

  onSearchChange() {
    clearTimeout(this.searchTimeout);

    const city = this.searchCity.trim().toLowerCase();

    if (!city) {
      this.selectedOffice = null;
      this.noResult = false;
      return;
    }

    if (city.length < 3) {
      this.selectedOffice = null;
      this.noResult = false;
      return;
    }

    this.searchTimeout = setTimeout(() => {
      const found = this.offices.find((office) =>
        office.cities.some((c: string) => c.toLowerCase().includes(city)),
      );

      if (found) {
        this.selectedOffice = found;
      } else {
        this.selectedOffice = {
          office: 'No Office Found',
          message: `We currently do not have an office in "${this.searchCity}". Please contact our nearest branch.`,
        };
      }
    }, 300);
  }

  clearSearch() {
    this.selectedOffice = null;
    this.searchCity = '';
    this.noResult = false;
  }

  isMobileMenuOpen = false;
  activeDropdown: string | null = null;

  openDropdown(key: string) {
    if (this.dropdownTimer) {
      clearTimeout(this.dropdownTimer);
    }
    this.activeDropdown = key;
  }

  closeDropdown() {
    this.dropdownTimer = setTimeout(() => {
      this.activeDropdown = null;
    }, 200);
  }

  // Mobile Menu Logic
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : 'auto';
  }

  toggleMobileSubmenu(menu: string) {
    this.activeMobileSubmenu = this.activeMobileSubmenu === menu ? null : menu;
  }
}
