import { Component } from '@angular/core';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.css']
})
export class HelpCenterComponent {

  ngOnInit() {
    this.locations.forEach((loc, i) => {
      loc.open = i === 0;   // First item active
    });
  }

  locations = [
    { 
      name: 'Head Office:',
      address: 'Unit 3302-D, West Tower, Tektite Towers, Exchange Road, Ortigas Center 1605',
      phone: '(02) 5328-2192 loc 117 (Sales)',
      customerService: '+639171372847 / +639989632457',
      generalInquiries: 'info@jkcapital.com.ph',
      loanUpdatesEscalation: 'loans@jkcapital.com.ph',
      open: false
    },
    { 
      name: 'Malolos, Bulacan:',
      address: 'Unit E1, Al bldg., KM 38 McArthur Highway, Zone 5, San Pablo, Malolos City, Bulacan',
      phone: '(044) 7910241',
      mobile: '0916-3150874 (Globe) | 0998-9632461 (Smart)',
      open: false 
    },
    { 
      name: 'Cabanatuan:',
      address: 'Purok 5,Burgos,Sto.Domingo,Nueva Ecija',
      phone: '(044) 7910241',
      mobile: '916-315-0874 (Globe) | 0998-9632461 (Smart)',
      open: false 
    },    
    { 
      name: 'Cebu:',
      address: 'Room 207, Manros Plaza bldg. General Maxilom Avenue Cebu City',
      mobile: '0919-6571035 (Smart) | 0966-2188379 (Globe)', 
      open: false 
    },
    { 
      name: 'Davao:', 
      address: 'Door 2A JRDC Building Pink Street Spring Village, Ma-a, Davao City',
      phone: '(082) 236-9097',
      mobile: '09352020568',
      open: false 
    }
  ];

  toggleLocation(index: number) {
    this.locations.forEach((loc, i) => {
      loc.open = i === index ? !loc.open : false;
    });
  }

}

