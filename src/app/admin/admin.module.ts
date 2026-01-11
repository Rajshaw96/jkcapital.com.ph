import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SeoManagerComponent } from './pages/seo-manager/seo-manager.component';
import { PagesManagerComponent } from './pages/pages-manager/pages-manager.component';
import { LeadsComponent } from './pages/leads/leads.component';
import { UsersComponent } from './pages/users/users.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminLoginComponent,
    DashboardComponent,
    SeoManagerComponent,
    PagesManagerComponent,
    LeadsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
