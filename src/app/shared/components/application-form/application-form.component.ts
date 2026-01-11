import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  applicationForm!: FormGroup;
  submitted = false;
  loading = false;
  resumeFile: File | null = null;

  // 🔥 CHANGE THIS TO YOUR REAL API
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  /* ================= FORM BUILD ================= */
  private buildForm(): void {
    this.applicationForm = this.fb.group({

      /* BASIC DETAILS */
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(65)]],
      gender: ['', Validators.required],

      /* EXPERIENCE */
      experience: this.fb.array([this.createExperienceGroup()]),

      /* EDUCATION */
      education: this.fb.array([this.createEducationGroup()]),

      /* RESUME */
      resume: ['', Validators.required]
    });
  }

  /* ================= FORM GROUPS ================= */
  private createExperienceGroup(): FormGroup {
    return this.fb.group({
      company: ['', Validators.required],
      role: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required]
    });
  }

  private createEducationGroup(): FormGroup {
    return this.fb.group({
      university: ['', Validators.required],
      qualification: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required]
    });
  }

  /* ================= FORM ARRAYS ================= */
  get experience(): FormArray {
    return this.applicationForm.get('experience') as FormArray;
  }

  get education(): FormArray {
    return this.applicationForm.get('education') as FormArray;
  }

  addExperience(): void {
    this.experience.push(this.createExperienceGroup());
  }

  addEducation(): void {
    this.education.push(this.createEducationGroup());
  }

  /* ================= FILE UPLOAD ================= */
  onResumeSelect(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!allowedTypes.includes(file.type)) {
      Swal.fire('Invalid File', 'Only PDF or DOCX files are allowed.', 'error');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      Swal.fire('File Too Large', 'Maximum file size is 5MB.', 'error');
      return;
    }

    this.resumeFile = file;
    this.applicationForm.get('resume')?.setValue(file.name);
  }

  /* ================= VALIDATION HELPER ================= */
  isInvalid(controlName: string): boolean {
    const control = this.applicationForm.get(controlName);
    return !!(control && control.invalid && (control.touched || this.submitted));
  }

  /* ================= SUBMIT ================= */
  submit(): void {
    this.submitted = true;

    if (this.applicationForm.invalid || !this.resumeFile) {
      this.applicationForm.markAllAsTouched();

      Swal.fire({
        icon: 'error',
        title: 'Incomplete Application',
        text: 'Please fill all required fields correctly.'
      });
      return;
    }

    this.loading = true;

    Swal.fire({
      title: 'Submitting Application...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    // ✅ Use FormData for file upload
    const formData = new FormData();

    formData.append('firstName', this.applicationForm.value.firstName);
    formData.append('lastName', this.applicationForm.value.lastName);
    formData.append('age', this.applicationForm.value.age);
    formData.append('gender', this.applicationForm.value.gender);
    formData.append('experience', JSON.stringify(this.applicationForm.value.experience));
    formData.append('education', JSON.stringify(this.applicationForm.value.education));
    formData.append('resume', this.resumeFile);

    this.http.post(this.apiUrl, formData).subscribe({
      next: () => this.handleSuccess(),
      error: () => this.handleError()
    });
  }

  /* ================= SWEET ALERT HANDLERS ================= */
  private handleSuccess(): void {
    this.loading = false;
    this.applicationForm.reset();
    this.submitted = false;
    this.resumeFile = null;

    Swal.fire({
      icon: 'success',
      title: 'Application Submitted',
      text: 'Check your email for your Loan Consultant Code.',
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
