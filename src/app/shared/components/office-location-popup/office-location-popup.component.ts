import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-office-location-popup',
  templateUrl: './office-location-popup.component.html',
  styleUrls: ['./office-location-popup.component.css']
})
export class OfficeLocationPopupComponent {
  // Receive selected office data from parent
  @Input() office: any;

  // Send close event to parent
  @Output() closePopup = new EventEmitter<void>();

  close() {
    this.closePopup.emit();
  }

}
