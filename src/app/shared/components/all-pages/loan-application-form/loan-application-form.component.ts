import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loan-application-form',
  templateUrl: './loan-application-form.component.html',
  styleUrls: ['./loan-application-form.component.css']
})
export class LoanApplicationFormComponent implements OnInit, OnDestroy {

  loanForm!: FormGroup;
  submitted = false;
  loading = false;

  private draftKey = 'loanApplicationDraft';
  private formSub!: Subscription;

  // 🔥 CHANGE TO YOUR REAL API
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.handleConditionalFields();
    this.restoreDraft();
    this.autoSaveDraft();
  }

  ngOnDestroy(): void {
    this.formSub?.unsubscribe();
  }

  /* ================= FORM BUILD ================= */
  private buildForm(): void {
    this.loanForm = this.fb.group({

      /* PERSONAL DETAILS */
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^[+]?[0-9 ]{7,20}$')
        ]
      ],

      /* BUSINESS DETAILS */
      businessName: ['', Validators.maxLength(100)],
      businessAddress: ['', Validators.maxLength(200)],
      province: ['', Validators.required],
      residenceAddress: ['', Validators.maxLength(200)],

      businessClassification: ['', Validators.required],
      businessNature: ['', Validators.required],
      productService: ['', [Validators.required, Validators.maxLength(150)]],

      /* BANK DETAILS */
      hasBankAccount: ['', Validators.required],
      bankAccountAge: [''],
      avgDailyBalance: [''],

      /* LOAN DETAILS */
      loanProduct: ['', Validators.required],
      loanPurpose: ['', Validators.required],
      loanAmount: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9,]+$')
        ]
      ],
      loanTerm: ['', Validators.required],
      annualIncome: ['', Validators.required],

      /* COLLATERAL */
      provideCollateral: ['', Validators.required],
      collateralType: ['']
    });
  }

  /* ================= CONDITIONAL VALIDATION ================= */
  private handleConditionalFields(): void {

    this.loanForm.get('hasBankAccount')?.valueChanges.subscribe(value => {
      const bankAge = this.loanForm.get('bankAccountAge');

      if (value === 'yes') {
        bankAge?.setValidators(Validators.required);
      } else {
        bankAge?.clearValidators();
        bankAge?.reset();
      }
      bankAge?.updateValueAndValidity();
    });

    this.loanForm.get('provideCollateral')?.valueChanges.subscribe(value => {
      const collateral = this.loanForm.get('collateralType');

      if (value === 'yes') {
        collateral?.setValidators(Validators.required);
      } else {
        collateral?.clearValidators();
        collateral?.reset();
      }
      collateral?.updateValueAndValidity();
    });
  }

  /* ================= LOCAL STORAGE ================= */
  private restoreDraft(): void {
    const draft = localStorage.getItem(this.draftKey);
    if (draft) {
      this.loanForm.patchValue(JSON.parse(draft));
    }
  }

  private autoSaveDraft(): void {
    this.formSub = this.loanForm.valueChanges.subscribe(value => {
      localStorage.setItem(this.draftKey, JSON.stringify(value));
    });
  }

  /* ================= VALIDATION HELPER ================= */
  isInvalid(controlName: string): boolean {
    const control = this.loanForm.get(controlName);
    return !!(control && control.invalid && (control.touched || this.submitted));
  }

  /* ================= SUBMIT ================= */
  submit(): void {
    this.submitted = true;

    if (this.loanForm.invalid) {
      this.loanForm.markAllAsTouched();

      Swal.fire({
        icon: 'error',
        title: 'Incomplete Form',
        text: 'Please correct the highlighted fields before submitting.'
      });
      return;
    }

    this.loading = true;

    Swal.fire({
      title: 'Submitting Application...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    const payload = {
      ...this.loanForm.value,
      submittedAt: new Date().toISOString(),
      source: 'loan-application'
    };

    this.http.post(this.apiUrl, payload).subscribe({
      next: () => this.handleSuccess(),
      error: () => this.handleError()
    });
  }

  /* ================= SWEET ALERT HANDLERS ================= */
  private handleSuccess(): void {
    this.loading = false;
    localStorage.removeItem(this.draftKey);
    this.loanForm.reset();
    this.submitted = false;

    Swal.fire({
      icon: 'success',
      title: 'Application Submitted',
      text: 'Our team will contact you shortly.',
      timer: 2500,
      showConfirmButton: false
    });
  }

  private handleError(): void {
    this.loading = false;

    Swal.fire({
      icon: 'error',
      title: 'Submission Failed',
      text: 'Something went wrong. Please try again later.'
    });
  }
}
