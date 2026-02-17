import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
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

  // PH numbers: 09XXXXXXXXX or 639XXXXXXXXX
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

  hours = Array.from({ length: 10 }, (_, i) => i + 9); // 9 AM – 6 PM
  minutes = [0, 15, 30, 45];

  minDate!: string;

  consultationForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, strictEmailValidator]],
    mobile: ['', [Validators.required, philippinesPhoneValidator]],
    date: ['', Validators.required],
    hour: ['9', Validators.required],
    minute: ['0', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // 🇵🇭 Philippines current date (Asia/Manila)
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

    // Allow backspace, delete, arrows, tab
    if ([8, 9, 37, 39, 46].includes(charCode)) {
      return;
    }

    // Block non-numeric
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

    Swal.fire({
      icon: 'success',
      title: 'Consultation Booked',
      text: 'Our loan expert will contact you shortly.',
      confirmButtonColor: '#1f5fd6'
    });
    this.close();
    this.consultationForm.reset();
  }
}
