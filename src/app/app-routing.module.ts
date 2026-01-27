import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule)
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  { 
    path: 'knowledge-hub', loadChildren: () => import('./knowledge-hub/knowledge-hub.module').then(m => m.KnowledgeHubModule) 
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled'
    } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
