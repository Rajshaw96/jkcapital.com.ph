import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebsiteLayoutComponent } from './layout/website-layout/website-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { BusinessLoansComponent } from './pages/business-loans/business-loans/business-loans.component';
import { WorkingCapitalLoanComponent } from './pages/business-loans/working-capital-loan/working-capital-loan.component';
import { CreditLineComponent } from './pages/business-loans/credit-line/credit-line.component';
import { ProjectFinancingComponent } from './pages/business-loans/project-financing/project-financing.component';
import { InvoiceAndReceivablesFinancingComponent } from './pages/business-loans/invoice-and-receivables-financing/invoice-and-receivables-financing.component';
import { CheckRediscountingComponent } from './pages/business-loans/check-rediscounting/check-rediscounting.component';
import { ReferAndEarnMainComponent } from './pages/refer-and-earn-main/refer-and-earn-main.component';
import { StarterReferrerComponent } from './pages/starter-referrer/starter-referrer.component';
import { AffiliateReferrerComponent } from './pages/affiliate-referrer/affiliate-referrer.component';
import { ProLoanConsultantComponent } from './pages/pro-loan-consultant/pro-loan-consultant.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { HelpCenterComponent } from './pages/help-center/help-center.component';
import { FrequentlyAskedQuestionsComponent } from './pages/frequently-asked-questions/frequently-asked-questions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TruthInLendingActComponent } from './pages/truth-in-lending-act/truth-in-lending-act.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OfflineComponent } from './pages/offline/offline.component';
import { LoanApplicationComponent } from './pages/loan-application/loan-application.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';


const routes: Routes = [
  {
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'offline', component: OfflineComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'business-loans', component: BusinessLoansComponent },
      { path: 'working-capital-loan', component: WorkingCapitalLoanComponent },
      { path: 'credit-line', component: CreditLineComponent },
      { path: 'project-financing', component: ProjectFinancingComponent },
      { path: 'receivables-financing', component: InvoiceAndReceivablesFinancingComponent },
      { path: 'check-re-discounting', component: CheckRediscountingComponent },
      { path: 'refer-and-earn-main', component: ReferAndEarnMainComponent },
      { path: 'starter-referrer', component: StarterReferrerComponent },
      { path: 'affiliate-referrer', component: AffiliateReferrerComponent },
      { path: 'pro-loan-consultant', component: ProLoanConsultantComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'help-center', component: HelpCenterComponent },
      { path: 'frequently-asked-questions', component: FrequentlyAskedQuestionsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'truth-in-lending-act', component: TruthInLendingActComponent },
      { path: 'industries', component: IndustriesComponent },
      { path: 'loan-application', component: LoanApplicationComponent },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule {}
