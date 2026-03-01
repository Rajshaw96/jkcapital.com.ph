import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-jk-landing-loan-application',
  templateUrl: './jk-landing-loan-application.component.html',
  styleUrls: ['./jk-landing-loan-application.component.css']
})
export class JkLandingLoanApplicationComponent {
  loanForm: FormGroup;

  // List for the province dropdown
  provinces: string[] = [
    'Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 
    'Limpopo', 'Mpumalanga', 'Northern Cape', 'North West', 'Western Cape'
  ];

  constructor(private fb: FormBuilder) {
    this.loanForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      businessName: ['', Validators.required],
      businessAddress: ['', Validators.required],
      province: ['', Validators.required],
      addressLine1: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loanForm.valid) {
      console.log('Form Submitted!', this.loanForm.value);
      alert('Application Submitted Successfully!');
    } else {
      this.markFormGroupTouched(this.loanForm);
    }
  }

  // Helper to show validation errors on submit
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}