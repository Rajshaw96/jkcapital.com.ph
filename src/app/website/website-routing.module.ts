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
import { IndustriesComponent } from './pages/industries/industries/industries.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OfflineComponent } from './pages/offline/offline.component';
import { LoanApplicationComponent } from './pages/loan-application/loan-application.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { JkCapitalLandingPageComponent } from './pages/jk-capital-landing-page/jk-capital-landing-page.component';
import { AgricultureComponent } from './pages/industries/agriculture/agriculture.component';
import { ConstructionBuildingComponent } from './pages/industries/construction-building/construction-building.component';
import { RenewableEnergyComponent } from './pages/industries/renewable-energy/renewable-energy.component';
import { RetailComponent } from './pages/industries/retail/retail.component';
import { ProfessionalServicesComponent } from './pages/industries/professional-services/professional-services.component';
import { PharmaceuticalMedicalComponent } from './pages/industries/pharmaceutical-medical/pharmaceutical-medical.component';
import { ManufacturingProductionComponent } from './pages/industries/manufacturing-production/manufacturing-production.component';
import { InfrastructureIndustrialComponent } from './pages/industries/infrastructure-industrial/infrastructure-industrial.component';
import { DistributionWholesaleSolutionsComponent } from './pages/industries/distribution-wholesale-solutions/distribution-wholesale-solutions.component';


const routes: Routes = [
  {
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'help-center', component: HelpCenterComponent },
      { path: 'faq', component: FrequentlyAskedQuestionsComponent },
      { path: 'landing', component: JkCapitalLandingPageComponent },

      { path: 'products/business-loans', component: BusinessLoansComponent },
      { path: 'products/working-capital-loan', component: WorkingCapitalLoanComponent },
      { path: 'products/credit-line', component: CreditLineComponent },
      { path: 'products/project-financing', component: ProjectFinancingComponent },
      { path: 'products/receivables-financing', component: InvoiceAndReceivablesFinancingComponent },
      { path: 'products/check-re-discounting', component: CheckRediscountingComponent },

      { path: 'industries', component: IndustriesComponent },
      { path: 'industries/agriculture', component: AgricultureComponent },
      { path: 'industries/construction-building', component: ConstructionBuildingComponent },
      { path: 'industries/distribution-wholesale-solutions', component: DistributionWholesaleSolutionsComponent },
      { path: 'industries/infrastructure-industrial', component: InfrastructureIndustrialComponent },
      { path: 'industries/manufacturing-production', component: ManufacturingProductionComponent },
      { path: 'industries/pharmaceutical-medical', component: PharmaceuticalMedicalComponent },
      { path: 'industries/renewable-energy', component: RenewableEnergyComponent },
      { path: 'industries/professional-services', component: ProfessionalServicesComponent },
      { path: 'industries/retail', component: RetailComponent },

      { path: 'refer-and-earn-main', component: ReferAndEarnMainComponent },
      { path: 'starter-referrer', component: StarterReferrerComponent },
      { path: 'affiliate-referrer', component: AffiliateReferrerComponent },
      { path: 'pro-loan-consultant', component: ProLoanConsultantComponent },
      { path: 'loan-application', component: LoanApplicationComponent },

      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'truth-in-lending-act', component: TruthInLendingActComponent },



      {
        path: 'knowledge-hub',
        loadChildren: () => import('../knowledge-hub/knowledge-hub.module').then(m => m.KnowledgeHubModule)
      },
      
    ],
  },
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
  },

  { path: 'offline', component: OfflineComponent },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule {}
