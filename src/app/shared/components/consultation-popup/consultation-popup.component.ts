import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

/* ❌ Disposable email domains */
const blockedDomains = [
  'mailinator.com',
  'tempmail.com',
  '10minutemail.com',
  'guerrillamail.com',
  'yopmail.com'
];

/* ✅ Strict Email Validator */
function strictEmailValidator(control: AbstractControl): ValidationErrors | null {

  if (!control.value) return null;

  const email = control.value.toLowerCase();
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(email)) {
    return { invalidEmail: true };
  }

  const domain = email.split('@')[1];
  if (blockedDomains.includes(domain)) {
    return { disposableEmail: true };
  }

  return null;
}

/* ✅ Philippines Mobile Validator */
function philippinesPhoneValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) return null;

  const value = control.value.replace(/\D/g, '');

  const phRegex = /^(09\d{9}|639\d{9})$/;

  return phRegex.test(value) ? null : { invalidPHPhone: true };
}

@Component({
  selector: 'app-consultation-popup',
  templateUrl: './consultation-popup.component.html',
  styleUrls: ['./consultation-popup.component.css']
})
export class ConsultationPopupComponent implements OnInit {

  @Output() closed = new EventEmitter<void>();

  hours = Array.from({ length: 10 }, (_, i) => i + 9);
  minutes = [0, 15, 30, 45];

  minDate!: string;

  // ✅ API URL
  private apiUrl = 'http://localhost:5000/api/consultations';

  consultationForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, strictEmailValidator]],
    mobile: ['', [Validators.required, philippinesPhoneValidator]],
    date: ['', Validators.required],
    hour: ['9', Validators.required],
    minute: ['0', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {

    const manilaNow = new Date(
      new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' })
    );

    this.minDate = manilaNow.toISOString().split('T')[0];

    this.consultationForm.get('mobile')?.valueChanges.subscribe(value => {
      if (value && value.length > 11) {
        this.consultationForm.get('mobile')?.setValue(value.slice(0, 11), { emitEvent: false });
      }
    });

  }

  close() {
    this.closed.emit();
  }

  chatFirst() {
    window.open('https://wa.me/639XXXXXXXXX', '_blank');
  }

  private isPastDateTime(): boolean {
    const { date, hour, minute } = this.consultationForm.value;
    if (!date) return false;

    const selected = new Date(`${date} ${hour}:${minute}`);
    const now = new Date(
      new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' })
    );

    return selected < now;
  }

  allowNumbersOnly(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;

    if ([8, 9, 37, 39, 46].includes(charCode)) return;

    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  onPasteNumberOnly(event: ClipboardEvent) {
    const pastedData = event.clipboardData?.getData('text') || '';

    if (!/^\d+$/.test(pastedData)) {
      event.preventDefault();
    }
  }

  submit() {
    if (this.consultationForm.invalid) {
      this.consultationForm.markAllAsTouched();

      Swal.fire({
        icon: 'error',
        title: 'Invalid Details',
        text: 'Please fill all required fields correctly.',
        confirmButtonColor: '#1f5fd6'
      });
      return;
    }

    if (this.isPastDateTime()) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Date & Time',
        text: 'Please select a future date and time (Philippines time).',
        confirmButtonColor: '#1f5fd6'
      });
      return;
    }

    const payload = {
      ...this.consultationForm.value,
      submittedAt: new Date().toISOString(),
      source: 'consultation-popup'
    };

    Swal.fire({
      title: 'Booking Consultation...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    // ✅ API CALL
    this.http.post(this.apiUrl, payload).subscribe({

      next: () => {

        Swal.fire({
          icon: 'success',
          title: 'Consultation Booked',
          text: 'Our loan expert will contact you shortly.',
          confirmButtonColor: '#1f5fd6'
        });

        this.close();
        this.consultationForm.reset();

      },

      error: () => {

        Swal.fire({
          icon: 'error',
          title: 'Submission Failed',
          text: 'Something went wrong. Please try again later.',
          confirmButtonColor: '#1f5fd6'
        });

      }

    });

  }

}