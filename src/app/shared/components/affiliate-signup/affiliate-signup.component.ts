import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-affiliate-signup',
  templateUrl: './affiliate-signup.component.html',
  styleUrls: ['./affiliate-signup.component.css']
})
export class AffiliateSignupComponent implements OnInit {

  loading = false;
  formSubmitted = false;
  referralId: string | null = null;

  blockedEmailDomains = [
    'mailinator.com',
    'tempmail.com',
    '10minutemail.com',
    'guerrillamail.com',
    'yopmail.com'
  ];

  affiliateForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],

    email: ['', [
      Validators.required,
      Validators.email
    ]],

    street1: ['', Validators.required],
    street2: [''],

    city: ['', Validators.required],
    region: ['', Validators.required],

    postalCode: ['', Validators.required],
    country: ['', Validators.required],

    socialUrl: ['', Validators.required],

    commissionType: ['', Validators.required],

    company: [''] // honeypot bot protection
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    // Get referral ID from URL
    this.referralId = this.route.snapshot.queryParamMap.get('ref');

  }

  /* =========================
      FIELD ERROR HELPER
  ========================== */

  isInvalid(name: string): boolean {

    const control = this.affiliateForm.get(name);

    return !!(
      control &&
      control.invalid &&
      (control.touched || this.formSubmitted)
    );

  }

  /* =========================
      EMAIL DOMAIN CHECK
  ========================== */

  isEmailAllowed(email: string | null | undefined): boolean {

    if (!email) return false;

    const domain = email.split('@')[1]?.toLowerCase();

    return !this.blockedEmailDomains.includes(domain || '');

  }

  /* =========================
      FORM SUBMIT
  ========================== */

  submitAffiliate(): void {

    this.formSubmitted = true;

    if (this.affiliateForm.invalid) {

      this.affiliateForm.markAllAsTouched();

      Swal.fire({
        icon: 'error',
        title: 'Incomplete Form',
        text: 'Please fill all required fields.'
      });

      return;
    }

    // Honeypot protection
    if (this.affiliateForm.value.company) {
      console.warn('Bot detected');
      return;
    }

    if (!this.isEmailAllowed(this.affiliateForm.value.email)) {

      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Disposable emails are not allowed.'
      });

      return;
    }

    this.loading = true;

    const payload = {
      ...this.affiliateForm.value,
      referralId: this.referralId,
      source: 'affiliate-signup',
      submittedAt: new Date().toISOString()
    };

    this.http.post('http://localhost:5000/api/affiliates-signup', payload)
      .subscribe({

        next: () => {

          this.loading = false;

          this.affiliateForm.reset();
          this.formSubmitted = false;

          Swal.fire({
            icon: 'success',
            title: 'Submitted Successfully',
            timer: 2000,
            showConfirmButton: false
          });
        },

        error: () => {

          this.loading = false;

          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Submission failed.'
          });

        }

      });

  }

}