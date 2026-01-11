import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  // 🚫 Disposable / fake email domains
  blockedEmailDomains = [
    'mailinator.com',
    'tempmail.com',
    '10minutemail.com',
    'guerrillamail.com',
    'yopmail.com',
    'fakeinbox.com',
    'trashmail.com'
  ];

  loading = false;
  formSubmitted = false;
  emailDomainInvalid = false;

  contactForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9+ ]{7,15}$')]],
    address: [''],
    loanType: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
    businessName: [''],

    // 🛑 Honeypot (anti-bot)
    company: ['']
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  /* =====================
     FIELD ERROR HELPER
  ====================== */
  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(
      control &&
      control.invalid &&
      (control.touched || this.formSubmitted)
    );
  }

  isEmailDomainValid(email: string): boolean {
    if (!email) return false;

    const domain = email.split('@')[1]?.toLowerCase();
    if (!domain) return false;

    return !this.blockedEmailDomains.includes(domain);
  }

  /* =====================
     FORM SUBMIT
  ====================== */
  submitForm(): void {
    this.formSubmitted = true;

    // ❌ Validation failed
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();

      Swal.fire({
        icon: 'error',
        title: 'Incomplete Form',
        text: 'Please correct the highlighted fields and try again.',
        confirmButtonColor: '#0d6efd'
      });

      return;
    }

    // 🚫 Bot detection (honeypot)
    if (this.contactForm.value.company) {
      return;
    }

    // 🚫 Email domain verification
    const email = this.contactForm.value.email as string;

    if (!this.isEmailDomainValid(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email Address',
        text: 'Please use a valid business or personal email address.',
        confirmButtonColor: '#dc3545'
      });
      return;
    }

    this.loading = true;

    const payload = {
      ...this.contactForm.value,
      timestamp: new Date().toISOString(),
      source: 'website-contact-form'
    };

    this.emailDomainInvalid = !this.isEmailDomainValid(email);
    if (this.emailDomainInvalid) return;

    this.http.post('https://api.yoursite.com/contact', payload).subscribe({
      next: () => {
        this.loading = false;
        this.formSubmitted = false;
        this.contactForm.reset();

        Swal.fire({
          icon: 'success',
          title: 'Submitted Successfully',
          text: 'Thank you! Our team will contact you shortly.',
          confirmButtonColor: '#0d6efd'
        });
      },
      error: () => {
        this.loading = false;

        Swal.fire({
          icon: 'error',
          title: 'Submission Failed',
          text: 'Something went wrong. Please try again later.',
          confirmButtonColor: '#dc3545'
        });
      }
    });
  }
}
