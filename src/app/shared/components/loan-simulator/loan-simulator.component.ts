import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-simulator',
  templateUrl: './loan-simulator.component.html',
  styleUrls: ['./loan-simulator.component.css']
})
export class LoanSimulatorComponent implements OnInit {

  // INITIAL VALUES
  loanAmount = 1000000;
  months = 6;
  interestRate = 3.5;

  // LIMITS
  loanMin = 300000;
  loanMax = 50000000;

  monthMin = 3;
  monthMax = 24;

  interestMin = 2;
  interestMax = 3.5;

  // PERCENT POSITIONS (For UI rendering)
  loanPercent = 0;
  monthPercent = 0;
  interestPercent = 0;

  activeSlider: 'loan' | 'months' | 'interest' | null = null;
  paymentFrequency: 'monthly' | 'semi-monthly' = 'monthly';

  // CALCULATION PROPERTIES
  totalInterest = 0;
  monthlyAmortisation = 0;
  processingFeeAmount = 0;
  netProceeds = 0;
  checksPerMonth = 1;
  processingFee = 5.0;

  constructor() {}

  ngOnInit() {
    // Set initial UI states
    this.updatePercentages();
    this.calculateLoan();
  }

  // ================= DRAG LOGIC =================

  startDrag(event: MouseEvent | TouchEvent, type: 'loan' | 'months' | 'interest') {
    // Prevent text selection while dragging
    if (event instanceof MouseEvent) {
       // event.preventDefault(); 
    }
    this.activeSlider = type;
  }

  @HostListener('window:mousemove', ['$event'])
  @HostListener('window:touchmove', ['$event'])
  onMove(event: MouseEvent | TouchEvent) {
    if (!this.activeSlider) return;

    const clientX =
      event instanceof MouseEvent
        ? event.clientX
        : event.touches[0].clientX;

    // We need to find the specific slider element being moved
    // We select the wrapper based on the active type
    const sliders = document.querySelectorAll('.slider-wrapper');
    let targetIdx = 0;
    if (this.activeSlider === 'months') targetIdx = 1;
    if (this.activeSlider === 'interest') targetIdx = 2;

    const sliderElement = sliders[targetIdx] as HTMLElement;
    if (!sliderElement) return;

    const rect = sliderElement.getBoundingClientRect();

    // Calculate percentage based on mouse position relative to slider width
    let percent = ((clientX - rect.left) / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));

    if (this.activeSlider === 'loan') {
      this.loanPercent = percent;
      // Step of 50,000 for loan amount
      const rawValue = this.loanMin + (percent / 100) * (this.loanMax - this.loanMin);
      this.loanAmount = Math.round(rawValue / 50000) * 50000;
    }

    if (this.activeSlider === 'months') {
      this.monthPercent = percent;
      // Step of 1 for months
      this.months = Math.round(
        this.monthMin + (percent / 100) * (this.monthMax - this.monthMin)
      );
    }

    if (this.activeSlider === 'interest') {
      this.interestPercent = percent;
      // Precision of 0.05 or 0.1 for interest
      const rawInterest = this.interestMin + (percent / 100) * (this.interestMax - this.interestMin);
      this.interestRate = parseFloat(rawInterest.toFixed(2));
    }

    this.calculateLoan();
  }

  @HostListener('window:mouseup')
  @HostListener('window:touchend')
  stopDrag() {
    this.activeSlider = null;
  }

  // ================= CALCULATIONS =================

  calculateLoan() {
    // 1. Calculate Interest (Loan * Rate% * Months)
    const monthlyInterestVal = this.loanAmount * (this.interestRate / 100);
    this.totalInterest = monthlyInterestVal * this.months;

    // 2. Calculate Monthly Amortisation
    const totalPayable = this.loanAmount + this.totalInterest;
    const totalInstallments = this.months * this.checksPerMonth;
    this.monthlyAmortisation = totalPayable / totalInstallments;

    // 3. Calculate Fees and Proceeds
    this.processingFeeAmount = this.loanAmount * (this.processingFee / 100);
    this.netProceeds = this.loanAmount - this.processingFeeAmount;
  }

  // Updates the visual progress bar widths based on current values
  updatePercentages() {
    this.loanPercent = ((this.loanAmount - this.loanMin) / (this.loanMax - this.loanMin)) * 100;
    this.monthPercent = ((this.months - this.monthMin) / (this.monthMax - this.monthMin)) * 100;
    this.interestPercent = ((this.interestRate - this.interestMin) / (this.interestMax - this.interestMin)) * 100;
  }

  // ================= ACTIONS =================

  setPaymentFrequency(type: 'monthly' | 'semi-monthly'): void {
    this.paymentFrequency = type;
    this.checksPerMonth = type === 'monthly' ? 1 : 2;
    this.calculateLoan();
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 2
    });
  }
}