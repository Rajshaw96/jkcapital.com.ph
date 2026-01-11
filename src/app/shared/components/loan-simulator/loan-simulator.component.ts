import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-loan-simulator',
  templateUrl: './loan-simulator.component.html',
  styleUrls: ['./loan-simulator.component.css']
})
export class LoanSimulatorComponent {

  // VALUES
  loanAmount = 1000000;
  months = 6;
  interestRate = 3.5;

  // LIMITS
  loanMin = 50000;
  loanMax = 5000000;

  monthMin = 3;
  monthMax = 36;

  interestMin = 1;
  interestMax = 10;

  // PERCENT POSITIONS
  loanPercent = 20;
  monthPercent = 15;
  interestPercent = 35;

  activeSlider: 'loan' | 'months' | 'interest' | null = null;
  paymentFrequency: 'monthly' | 'semi-monthly' = 'monthly';

  

  // ================= DRAG START =================
  startDrag(event: MouseEvent | TouchEvent, type: any) {
    event.preventDefault();
    this.activeSlider = type;
  }

  // ================= DRAG MOVE =================
  @HostListener('window:mousemove', ['$event'])
  @HostListener('window:touchmove', ['$event'])
  onMove(event: MouseEvent | TouchEvent) {
    if (!this.activeSlider) return;

    const clientX =
      event instanceof MouseEvent
        ? event.clientX
        : event.touches[0].clientX;

    const slider = document.querySelector('.slider') as HTMLElement;
    const rect = slider.getBoundingClientRect();

    let percent = ((clientX - rect.left) / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));

    if (this.activeSlider === 'loan') {
      this.loanPercent = percent;
      this.loanAmount =
        Math.round(
          (this.loanMin +
            (percent / 100) * (this.loanMax - this.loanMin)) / 50000
        ) * 50000;
    }

    if (this.activeSlider === 'months') {
      this.monthPercent = percent;
      this.months = Math.round(
        this.monthMin +
          (percent / 100) * (this.monthMax - this.monthMin)
      );
    }

    if (this.activeSlider === 'interest') {
      this.interestPercent = percent;
      this.interestRate = +(
        this.interestMin +
        (percent / 100) * (this.interestMax - this.interestMin)
      ).toFixed(1);
    }

    this.calculateLoan();
  }

  // ================= DRAG END =================
  @HostListener('window:mouseup')
  @HostListener('window:touchend')
  stopDrag() {
    this.activeSlider = null;
  }

  // ================= CALCULATION =================
  totalInterest = 0;
  monthlyAmortisation = 0;
  processingFeeAmount = 0;
  netProceeds = 0;
  checksPerMonth = 1;
  processingFee = 5;

  calculateLoan() {
    const monthlyInterest = this.loanAmount * (this.interestRate / 100);
    this.totalInterest = monthlyInterest * this.months;

    const totalPayable = this.loanAmount + this.totalInterest;
    // this.monthlyAmortisation = totalPayable / this.months;
    const totalChecks = this.months * this.checksPerMonth;
    this.monthlyAmortisation = totalPayable / totalChecks;

    this.processingFeeAmount = this.loanAmount * (this.processingFee / 100);
    this.netProceeds = this.loanAmount - this.processingFeeAmount;
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('en-PH', {
      style: 'currency',
      currency: 'PHP'
    });
  }

  setPaymentFrequency(type: 'monthly' | 'semi-monthly'): void {
    this.paymentFrequency = type;
    this.checksPerMonth = type === 'monthly' ? 1 : 2;
    this.calculateLoan();
  }

}

