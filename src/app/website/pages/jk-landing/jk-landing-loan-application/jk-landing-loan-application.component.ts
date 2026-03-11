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
  showFullForm = false;

  // store created record id
  applicationId: any;

  constructor(
    private fb: FormBuilder,
    private loanService: ApiService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loanForm = this.fb.group({

      // BASIC DETAILS
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
      addressLine1: ['', Validators.required],

      // ADDITIONAL DETAILS
      residenceAddress: [''],
      businessClassification: ['', Validators.required],
      natureOfBusiness: ['', Validators.required],
      productService: ['', Validators.required],
      bankAccount: ['', Validators.required],
      bankAccountAge: [''],
      averageDailyBalance: [''],
      loanProduct: ['', Validators.required],
      loanPurpose: ['', Validators.required],
      loanAmount: ['', Validators.required],
      loanTerm: ['', Validators.required],
      annualNetIncome: ['', Validators.required],
      provideCollateral: ['', Validators.required],
      collateralType: ['']

    });
  }

  onMobileInput(event: any) {
    const input = event.target.value.replace(/[^0-9]/g, '');
    this.loanForm.get('mobileNumber')?.setValue(input, { emitEvent: false });
  }

  // OPEN FULL FORM + SAVE BASIC DETAILS
  openFullForm() {

    const basicFields = [
      'firstName',
      'lastName',
      'email',
      'mobileNumber',
      'businessName',
      'businessAddress',
      'province',
      'addressLine1'
    ];

    let invalid = false;

    basicFields.forEach(field => {
      const control = this.loanForm.get(field);
      control?.markAsTouched();

      if (control?.invalid) {
        invalid = true;
      }
    });

    if (invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Required Fields',
        text: 'Please fill all basic details first.'
      });
      return;
    }

    this.isLoading = true;

    const basicPayload = {
      firstName: this.loanForm.value.firstName,
      lastName: this.loanForm.value.lastName,
      email: this.loanForm.value.email,
      mobileNumber: this.loanForm.value.mobileNumber,
      businessName: this.loanForm.value.businessName,
      businessAddress: this.loanForm.value.businessAddress,
      province: this.loanForm.value.province,
      addressLine1: this.loanForm.value.addressLine1
    };

    this.loanService.submitLoanApplication(basicPayload)
      .subscribe({
        next: (res: any) => {

          this.isLoading = false;

          // save id from backend
          this.applicationId = res.id;

          // expand form
          this.showFullForm = true;

          Swal.fire({
            icon: 'success',
            title: 'Basic Details Saved',
            text: 'Please complete the remaining details.'
          });

        },
        error: () => {

          this.isLoading = false;

          Swal.fire({
            icon: 'error',
            title: 'Submission Failed',
            text: 'Something went wrong.'
          });
        }
      });
  }

  // FINAL SUBMIT → UPDATE RECORD
  onSubmit() {

    if (!this.showFullForm) return;

    if (this.loanForm.invalid) {
      this.loanForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    const payload = {
      id: this.applicationId,
      ...this.loanForm.value
    };

    this.loanService.updateLoanApplication(payload)
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
          this.showFullForm = false;
          this.applicationId = null;
        },
        error: () => {

          this.isLoading = false;

          Swal.fire({
            icon: 'error',
            title: 'Submission Failed',
            text: 'Something went wrong. Please try again.'
          });
        }
      });
  }

  get f() {
    return this.loanForm.controls;
  }

}