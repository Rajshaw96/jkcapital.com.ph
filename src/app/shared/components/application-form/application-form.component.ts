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

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private storageKey = 'loanConsultantApplication';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.loadSavedData();
    this.autoSaveToLocalStorage();
  }

  /* ================= FORM BUILD ================= */
  private buildForm(): void {
    this.applicationForm = this.fb.group({

      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(65)]],
      gender: ['', Validators.required],

      experience: this.fb.array([this.createExperienceGroup()]),
      education: this.fb.array([this.createEducationGroup()]),

      resume: ['', Validators.required]
    });
  }

  /* ================= GROUP BUILDERS ================= */
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
      Swal.fire('Invalid File', 'Only PDF or DOCX allowed.', 'error');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      Swal.fire('File Too Large', 'Maximum 5MB allowed.', 'error');
      return;
    }

    this.resumeFile = file;
    this.applicationForm.get('resume')?.setValue(file.name);
  }

  /* ================= VALIDATION ================= */
  isInvalid(controlName: string): boolean {
    const control = this.applicationForm.get(controlName);
    return !!(control && control.invalid && (control.touched || this.submitted));
  }

  /* ================= LOCAL STORAGE ================= */

  private autoSaveToLocalStorage(): void {
    this.applicationForm.valueChanges.subscribe(value => {
      const dataToSave = {
        ...value,
        resumeFileName: this.resumeFile?.name || null
      };
      localStorage.setItem(this.storageKey, JSON.stringify(dataToSave));
    });
  }

  private loadSavedData(): void {
    const saved = localStorage.getItem(this.storageKey);
    if (!saved) return;

    const parsed = JSON.parse(saved);
    this.applicationForm.patchValue(parsed);
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

    const formData = new FormData();

    formData.append('firstName', this.applicationForm.value.firstName);
    formData.append('lastName', this.applicationForm.value.lastName);
    formData.append('age', this.applicationForm.value.age);
    formData.append('gender', this.applicationForm.value.gender);
    formData.append('experience', JSON.stringify(this.applicationForm.value.experience));
    formData.append('education', JSON.stringify(this.applicationForm.value.education));
    formData.append('resume', this.resumeFile);

    /* ✅ API CALL + LOCAL STORAGE SAVE */
    this.http.post(this.apiUrl, formData).subscribe({
      next: () => {
        localStorage.setItem(this.storageKey, JSON.stringify(this.applicationForm.value));
        this.handleSuccess();
      },
      error: () => this.handleError()
    });
  }

  /* ================= SUCCESS ================= */
  private handleSuccess(): void {
    this.loading = false;
    localStorage.removeItem(this.storageKey);

    this.applicationForm.reset();
    this.resumeFile = null;
    this.submitted = false;

    Swal.fire({
      icon: 'success',
      title: 'Application Submitted',
      text: 'Check your email for your Loan Consultant Code.',
      timer: 2500,
      showConfirmButton: false
    });
  }

  /* ================= ERROR ================= */
  private handleError(): void {
    this.loading = false;

    Swal.fire({
      icon: 'error',
      title: 'Submission Failed',
      text: 'Something went wrong. Please try again later.'
    });
  }
}