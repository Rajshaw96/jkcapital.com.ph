import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-affiliate-referrer-now',
  templateUrl: './affiliate-referrer-now.component.html',
  styleUrls: ['./affiliate-referrer-now.component.css']
})
export class AffiliateReferrerNowComponent {

  loading = false;
  formSubmitted = false;

  blockedEmailDomains = [
    'mailinator.com',
    'tempmail.com',
    '10minutemail.com',
    'guerrillamail.com',
    'yopmail.com'
  ];

  referForm = this.fb.group({
    yourFirstName: ['', [Validators.required, Validators.minLength(2)]],
    yourLastName: ['', [Validators.required, Validators.minLength(2)]],

    yourPhone: ['', [
      Validators.required,
      Validators.pattern('^[0-9+ ]{7,15}$')
    ]],

    yourEmail: ['', [
      Validators.required,
      Validators.email
    ]],

    referrerCode: ['', Validators.required],

    refFirstName: ['', Validators.required],
    refLastName: ['', Validators.required],

    refPhone: ['', [
      Validators.required,
      Validators.pattern('^[0-9+ ]{7,15}$')
    ]],

    refEmail: ['', [
      Validators.required,
      Validators.email
    ]],

    businessName: ['', Validators.required],
    businessType: ['', Validators.required],

    company: [''] // honeypot
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  /* =========================
      FIELD ERROR HELPER
  ========================== */

  isInvalid(name: string): boolean {

    const control = this.referForm.get(name);

    return !!(
      control &&
      control.invalid &&
      (control.touched || this.formSubmitted)
    );

  }

  /* =========================
      EMAIL DOMAIN VALIDATION
  ========================== */

  isEmailAllowed(email: string | null | undefined): boolean {

    if (!email) return false;

    const domain = email.split('@')[1]?.toLowerCase();

    if (!domain) return false;

    return !this.blockedEmailDomains.includes(domain);

  }

  /* =========================
      FORM SUBMIT
  ========================== */

  submitReferral(): void {

    this.formSubmitted = true;

    if (this.referForm.invalid) {

      this.referForm.markAllAsTouched();

      Swal.fire({
        icon: 'error',
        title: 'Incomplete Form',
        text: 'Please correct highlighted fields.'
      });

      return;
    }

    // Honeypot protection
    if (this.referForm.value.company) return;

    // Email validation
    if (
      !this.isEmailAllowed(this.referForm.value.yourEmail!) ||
      !this.isEmailAllowed(this.referForm.value.refEmail!)
    ) {

      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Temporary email addresses are not allowed.'
      });

      return;

    }

    this.loading = true;

    const payload = {
      ...this.referForm.value,
      source: 'refer-now',
      timestamp: new Date().toISOString()
    };

    // ✅ API CALL
    this.http.post('http://localhost:5000/api/affiliate-referrals', payload)
      .subscribe({

        next: () => {

          this.loading = false;
          this.formSubmitted = false;

          this.referForm.reset();

          Swal.fire({
            icon: 'success',
            title: 'Referral Submitted',
            text: 'Thank you! Your referral has been sent successfully.'
          });

        },

        error: () => {

          this.loading = false;

          Swal.fire({
            icon: 'error',
            title: 'Submission Failed',
            text: 'Something went wrong. Please try again later.'
          });

        }

      });

  }

}