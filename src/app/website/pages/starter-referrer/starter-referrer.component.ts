import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-starter-referrer',
  templateUrl: './starter-referrer.component.html',
  styleUrls: ['./starter-referrer.component.css']
})
export class StarterReferrerComponent {

  loading = false;
  formSubmitted = false;

  // Block disposable email domains
  blockedEmailDomains = [
    'mailinator.com',
    'tempmail.com',
    '10minutemail.com',
    'guerrillamail.com',
    'yopmail.com',
    'fakeinbox.com',
    'trashmail.com'
  ];

  referForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {

    this.referForm = this.fb.group({

      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],

      mobile: ['', [
        Validators.required,
        Validators.pattern('^[0-9 ]{7,15}$')
      ]],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      referralFirstName: ['', [Validators.required, Validators.minLength(2)]],
      referralLastName: ['', [Validators.required, Validators.minLength(2)]],

      referralPhone: ['', [
        Validators.required,
        Validators.pattern('^[0-9 ]{7,15}$')
      ]],

      referralEmail: ['', [
        Validators.required,
        Validators.email
      ]],

      referralBusinessName: ['', Validators.required],

      referralBusinessType: ['', Validators.required],

      // honeypot bot protection
      company: ['']

    });

  }

  /* =========================
      FIELD ERROR HELPER
  ========================== */

  isInvalid(controlName: string): boolean {

    const control = this.referForm.get(controlName);

    return !!(
      control &&
      control.invalid &&
      (control.touched || this.formSubmitted)
    );
  }

  /* =========================
      EMAIL DOMAIN VALIDATION
  ========================== */

  isEmailDomainValid(email: string): boolean {

    if (!email) return false;

    const domain = email.split('@')[1]?.toLowerCase();

    if (!domain) return false;

    return !this.blockedEmailDomains.includes(domain);

  }

  /* =========================
      PHONE INPUT CLEANER
  ========================== */

  onPhoneInput(event: any, field: string) {

    const input = event.target.value.replace(/[^0-9 ]/g, '');

    this.referForm.get(field)?.setValue(input, { emitEvent: false });

  }

  /* =========================
      FORM SUBMIT
  ========================== */

  submitForm() {

    this.formSubmitted = true;

    if (this.referForm.invalid) {

      this.referForm.markAllAsTouched();

      Swal.fire({
        icon: 'error',
        title: 'Incomplete Form',
        text: 'Please complete all required fields.',
        confirmButtonColor: '#0d6efd'
      });

      return;

    }

    // honeypot check
    if (this.referForm.value.company) {
      return;
    }

    const email = this.referForm.value.email;
    const referralEmail = this.referForm.value.referralEmail;

    if (!this.isEmailDomainValid(email) || !this.isEmailDomainValid(referralEmail)) {

      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Disposable email addresses are not allowed.',
        confirmButtonColor: '#dc3545'
      });

      return;

    }

    this.loading = true;

    const payload = {
      ...this.referForm.value,
      timestamp: new Date().toISOString(),
      source: 'website-referral-form'
    };

    // API call
    this.http.post('http://localhost:5000/api/referrals', payload)
      .subscribe({

        next: () => {

          this.loading = false;
          this.formSubmitted = false;

          this.referForm.reset();

          Swal.fire({
            icon: 'success',
            title: 'Referral Submitted!',
            text: 'Thank you! We will contact your referral shortly.',
            confirmButtonColor: '#0d6efd'
          });

        },

        error: () => {

          this.loading = false;

          Swal.fire({
            icon: 'error',
            title: 'Submission Failed',
            text: 'Something went wrong. Please try again.',
            confirmButtonColor: '#dc3545'
          });

        }

      });

  }

}