import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // ✅ THIS is what you need

import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CtaBannerComponent } from './components/cta-banner/cta-banner.component';
import { DifferenceComponent } from './components/difference/difference.component';
import { SupportSmeComponent } from './components/support-sme/support-sme.component';
import { OurPartnersComponent } from './components/our-partners/our-partners.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { LoanSimulatorComponent } from './components/loan-simulator/loan-simulator.component';
import { LoanSolutionsComponent } from './components/loan-solutions/loan-solutions.component';
import { LoanStructureComponent } from './components/loan-structure/loan-structure.component';
import { CompareOptionsComponent } from './components/compare-options/compare-options.component';
import { LoanConsultantComponent } from './components/loan-consultant/loan-consultant.component';
import { InTheSpotlightComponent } from './components/in-the-spotlight/in-the-spotlight.component';
import { AffiliateSignupComponent } from './components/affiliate-signup/affiliate-signup.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
import { ProcessEligibilityComponent } from './components/process-eligibility/process-eligibility.component';
import { CreditLineVsBusinessLoanComponent } from './components/credit-line-vs-business-loan/credit-line-vs-business-loan.component';
import { ProjectFinancingVsBusinessLoanComponent } from './components/project-financing-vs-business-loan/project-financing-vs-business-loan.component';
import { OurImpactComponent } from './components/our-impact/our-impact.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { NeedMoreHelpComponent } from './components/need-more-help/need-more-help.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { LoanApplicationFormComponent } from './components/loan-application-form/loan-application-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsultationPopupComponent } from './components/consultation-popup/consultation-popup.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FinancingOptionsComponent } from './components/financing-options/financing-options.component';
import { WhyChooseCheckRediscountingComponent } from './components/why-choose-check-rediscounting/why-choose-check-rediscounting.component';
import { ReceivablesFinancingCompareComponent } from './components/receivables-financing-compare/receivables-financing-compare.component';
import { WorkingCapitalCompareComponent } from './components/working-capital-compare/working-capital-compare.component';
import { AllIndustriesComponent } from './components/all-industries/all-industries.component';
import { OfficeLocationPopupComponent } from './components/office-location-popup/office-location-popup.component';

const SHARED_COMPONENTS = [
  FaqComponent,
  FooterComponent,
  HeaderComponent,
  CtaBannerComponent,
  SupportSmeComponent,
  DifferenceComponent,
  OurPartnersComponent,
  HeroSectionComponent,
  LoanSimulatorComponent,
  LoanSolutionsComponent,
  LoanStructureComponent,
  InTheSpotlightComponent,
  LoanConsultantComponent,
  CompareOptionsComponent,
  HomeHeroSectionComponent,
  AffiliateSignupComponent,
  ProcessEligibilityComponent,
  CreditLineVsBusinessLoanComponent,
  ProjectFinancingVsBusinessLoanComponent,
  OurImpactComponent,
  ApplicationFormComponent,
  NeedMoreHelpComponent,
  OurTeamComponent,
  LoanApplicationFormComponent,
  ConsultationPopupComponent,
  TestimonialsComponent,
  FinancingOptionsComponent,
  WhyChooseCheckRediscountingComponent,
  ReceivablesFinancingCompareComponent,
  WorkingCapitalCompareComponent,
  AllIndustriesComponent,
  OfficeLocationPopupComponent
];

@NgModule({
  declarations: [...SHARED_COMPONENTS,],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    ...SHARED_COMPONENTS,
    RouterModule
  ],
})
export class SharedModule {}
