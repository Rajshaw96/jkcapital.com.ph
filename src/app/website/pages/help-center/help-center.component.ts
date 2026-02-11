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
      name: 'Malolos, Bulacan',
      address: 'Unit E1, Al bldg., KM 38 McArthur Highway, Zone 5, San Pablo, Malolos City, Bulacan',
      phone: '(044) 7910241',
      mobile: '0916-3150874 (Globe) | 0998-9632461 (Smart)',
      open: false
    },
    { 
      name: 'Cabanatuan City, Nueva Ecija',
      address: '2nd Floor Unit 11 Priscila Building, Brgy. H. Concepcion, Maharlika Highway, Cabanatuan City',
      phone: '(044) 803-6399',
      mobile: '0915-6232461 (Globe) | 0998-5514189 (Smart)',
      open: false 
    },
    { 
      name: 'Cebu City, Cebu',
      address: 'Davao City, Davao Door 2A JRDC Building Pink Street Spring Village, Ma-a, Davao City',
      phone: '',
      mobile: ' 0917-6354509 (Globe) | 0961-1184789 (Smart)', 
      open: false 
    },
    { 
      name: 'Davao City, Davao', 
      address: 'Unit F1, Al Idg, KM 38 McArthur Highway, Zone 5, San Pablo, Malolos City, Bulacan',
      phone: '(044) 7910241',
      mobile: '0918 350874 (Globe) | 0998 9632481 (Smart)',
      open: false 
    }
  ];

  toggleLocation(index: number) {
    this.locations.forEach((loc, i) => {
      loc.open = i === index ? !loc.open : false;
    });
  }

}

