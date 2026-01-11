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
    yourPhone: ['', [Validators.required, Validators.pattern('^[0-9+ ]{7,15}$')]],
    yourEmail: ['', [Validators.required, Validators.email]],
    referrerCode: ['', Validators.required],

    refFirstName: ['', Validators.required],
    refLastName: ['', Validators.required],
    refPhone: ['', [Validators.required, Validators.pattern('^[0-9+ ]{7,15}$')]],
    refEmail: ['', [Validators.required, Validators.email]],
    businessName: ['', Validators.required],
    businessType: ['', Validators.required],

    company: [''] // honeypot
  });

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  isInvalid(name: string): boolean {
    const c = this.referForm.get(name);
    return !!(c && c.invalid && (c.touched || this.formSubmitted));
  }

  isEmailAllowed(email: string | null | undefined): boolean {
    if (!email) return false;

    const domain = email.split('@')[1]?.toLowerCase();
    if (!domain) return false;

    return !this.blockedEmailDomains.includes(domain);
  }

  submitReferral(): void {
    debugger;
    this.formSubmitted = true;

    if (this.referForm.invalid) {
      this.referForm.markAllAsTouched();
      Swal.fire('Incomplete Form', 'Please correct highlighted fields.', 'error');
      return;
    }

    // Honeypot
    if (this.referForm.value.company) return;

    // Email domain check (both emails)
    if (
      !this.isEmailAllowed(this.referForm.value.yourEmail!) ||
      !this.isEmailAllowed(this.referForm.value.refEmail!)
    ) {
      Swal.fire('Invalid Email', 'Temporary email addresses are not allowed.', 'error');
      return;
    }

    this.loading = true;

    const payload = {
      ...this.referForm.value,
      source: 'refer-now',
      timestamp: new Date().toISOString()
    };

    this.http.post('https://api.yoursite.com/refer', payload).subscribe({
      next: () => {
        this.loading = false;
        this.formSubmitted = false;
        this.referForm.reset();

        Swal.fire(
          'Referral Submitted',
          'Thank you! Your referral has been sent successfully.',
          'success'
        );
      },
      error: () => {
        this.loading = false;
        Swal.fire(
          'Submission Failed',
          'Something went wrong. Please try again later.',
          'error'
        );
      }
    });
  }
}

