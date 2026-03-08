import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-jk-landing-loan-application',
  templateUrl: './jk-landing-loan-application.component.html',
  styleUrls: ['./jk-landing-loan-application.component.css']
})
export class JkLandingLoanApplicationComponent implements OnInit {

  loanForm!: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private loanService: ApiService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loanForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]],
      businessName: ['', Validators.required],
      businessAddress: ['', Validators.required],
      province: ['', Validators.required],
      addressLine1: ['', Validators.required]
    });
  }

  onMobileInput(event: any) {
    const input = event.target.value.replace(/[^0-9]/g, '');
    this.loanForm.get('mobileNumber')?.setValue(input, { emitEvent: false });
  }

  onSubmit() {

    if (this.loanForm.invalid) {
      this.loanForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    this.loanService.submitLoanApplication(this.loanForm.value)
      .subscribe({
        next: () => {

          this.isLoading = false;

          Swal.fire({
            icon: 'success',
            title: 'Application Submitted!',
            text: 'Our team will contact you shortly.',
            confirmButtonColor: '#003366'
          });

          this.loanForm.reset();
        },
        error: () => {

          this.isLoading = false;

          Swal.fire({
            icon: 'error',
            title: 'Submission Failed',
            text: 'Something went wrong. Please try again.',
          });
        }
      });
  }

  get f() {
    return this.loanForm.controls;
  }

}