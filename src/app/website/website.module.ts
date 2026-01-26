import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteLayoutComponent } from './layout/website-layout/website-layout.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BusinessLoansComponent } from './pages/business-loans/business-loans/business-loans.component';
import { AffiliateReferrerComponent } from './pages/affiliate-referrer/affiliate-referrer.component';
import { AffiliateReferrerNowComponent } from '../shared/components/affiliate-referrer-now/affiliate-referrer-now.component';
import { CheckRediscountingComponent } from './pages/business-loans/check-rediscounting/check-rediscounting.component';
import { CreditLineComponent } from './pages/business-loans/credit-line/credit-line.component';
import { InvoiceAndReceivablesFinancingComponent } from './pages/business-loans/invoice-and-receivables-financing/invoice-and-receivables-financing.component';
import { ProLoanConsultantComponent } from './pages/pro-loan-consultant/pro-loan-consultant.component';
import { ProjectFinancingComponent } from './pages/business-loans/project-financing/project-financing.component';
import { ReferAndEarnMainComponent } from './pages/refer-and-earn-main/refer-and-earn-main.component';
import { StarterReferrerComponent } from './pages/starter-referrer/starter-referrer.component';
import { WorkingCapitalLoanComponent } from './pages/business-loans/working-capital-loan/working-capital-loan.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { KnowledgeHubModule } from '../knowledge-hub/knowledge-hub.module';
import { HelpCenterComponent } from './pages/help-center/help-center.component';
import { FrequentlyAskedQuestionsComponent } from './pages/frequently-asked-questions/frequently-asked-questions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TruthInLendingActComponent } from './pages/truth-in-lending-act/truth-in-lending-act.component';
import { IndustriesComponent } from './pages/industries/industries/industries.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OfflineComponent } from './pages/offline/offline.component';
import { LoanApplicationComponent } from './pages/loan-application/loan-application.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JkCapitalLandingPageComponent } from './pages/jk-capital-landing-page/jk-capital-landing-page.component';
import { AgricultureComponent } from './pages/industries/agriculture/agriculture.component';
import { ConstructionBuildingComponent } from './pages/industries/construction-building/construction-building.component';
import { DistributionWholesaleSolutionsComponent } from './pages/industries/distribution-wholesale-solutions/distribution-wholesale-solutions.component';
import { InfrastructureIndustrialComponent } from './pages/industries/infrastructure-industrial/infrastructure-industrial.component';
import { ManufacturingProductionComponent } from './pages/industries/manufacturing-production/manufacturing-production.component';
import { PharmaceuticalMedicalComponent } from './pages/industries/pharmaceutical-medical/pharmaceutical-medical.component';
import { RenewableEnergyComponent } from './pages/industries/renewable-energy/renewable-energy.component';
import { ProfessionalServicesComponent } from './pages/industries/professional-services/professional-services.component';
import { RetailComponent } from './pages/industries/retail/retail.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    CreditLineComponent,
    WebsiteLayoutComponent,
    BusinessLoansComponent,
    StarterReferrerComponent,
    ProjectFinancingComponent,
    ReferAndEarnMainComponent,
    ProLoanConsultantComponent,
    AffiliateReferrerComponent,
    CheckRediscountingComponent,
    WorkingCapitalLoanComponent,
    AffiliateReferrerNowComponent,
    InvoiceAndReceivablesFinancingComponent,
    PrivacyPolicyComponent,
    HelpCenterComponent,
    FrequentlyAskedQuestionsComponent,
    ContactUsComponent,
    TruthInLendingActComponent,
    IndustriesComponent,
    NotFoundComponent,
    OfflineComponent,
    LoanApplicationComponent,
    JkCapitalLandingPageComponent,
    AgricultureComponent,
    ConstructionBuildingComponent,
    DistributionWholesaleSolutionsComponent,
    InfrastructureIndustrialComponent,
    ManufacturingProductionComponent,
    PharmaceuticalMedicalComponent,
    RenewableEnergyComponent,
    ProfessionalServicesComponent,
    RetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    WebsiteRoutingModule,
  ],
  exports: [WebsiteLayoutComponent]
})
export class WebsiteModule { }
