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
    phone: ['', [Validators.required, Validators.pattern('^[+]?[0-9 ]{7,20}$')]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', Validators.required],
    city: ['', Validators.required],
    province: ['', Validators.required],
    country: ['', Validators.required],
    businessName: ['', Validators.required],
    businessType: ['', Validators.required],
    company: [''] // honeypot
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.referralId = this.route.snapshot.queryParamMap.get('ref');

    const draft = localStorage.getItem('affiliateDraft');
    if (draft) {
      this.affiliateForm.patchValue(JSON.parse(draft));
    }

    this.affiliateForm.valueChanges.subscribe(value => {
      localStorage.setItem('affiliateDraft', JSON.stringify(value));
    });
  }

  isInvalid(name: string): boolean {
    const control = this.affiliateForm.get(name);
    return !!(control && control.invalid && (control.touched || this.formSubmitted));
  }

  isEmailAllowed(email: string | null | undefined): boolean {
    if (!email) return false;
    const domain = email.split('@')[1]?.toLowerCase();
    return !this.blockedEmailDomains.includes(domain || '');
  }

  submitAffiliate(): void {
    console.log('SUBMIT CLICKED');
    this.formSubmitted = true;

    if (this.affiliateForm.invalid) {
      this.affiliateForm.markAllAsTouched();
      Swal.fire('Incomplete Form', 'Please fix highlighted fields.', 'error');
      return;
    }

    if (this.affiliateForm.value.company) {
      console.warn('Bot detected');
      return;
    }

    if (!this.isEmailAllowed(this.affiliateForm.value.email)) {
      Swal.fire('Invalid Email', 'Disposable emails not allowed.', 'error');
      return;
    }

    this.loading = true;

    const payload = {
      ...this.affiliateForm.value,
      referralId: this.referralId,
      source: 'affiliate-signup',
      submittedAt: new Date().toISOString()
    };

    console.log('PAYLOAD', payload);

    // 🔥 USE REAL API HERE
    this.http.post('https://jsonplaceholder.typicode.com/posts', payload)
      .subscribe({
        next: () => {
          this.loading = false;
          localStorage.removeItem('affiliateDraft');
          this.affiliateForm.reset();
          this.formSubmitted = false;

          Swal.fire({
            icon: 'success',
            title: 'Submitted Successfully',
            timer: 2000,
            showConfirmButton: false
          });

          setTimeout(() => {
            this.router.navigate(['/thank-you']);
          }, 2000);
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
          Swal.fire('Error', 'Submission failed.', 'error');
        }
      });
  }
}
