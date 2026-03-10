import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { KnowledgeHubRoutingModule } from './knowledge-hub-routing.module';


import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AllArticleListComponent } from './layout/all-article-list/all-article-list.component';
import { ArticleDetailsComponent } from './layout/article-details/article-details.component';


const SHARED_COMPONENTS = [
  AllArticleListComponent,
  ArticleDetailsComponent,
];
@NgModule({
  declarations: [...SHARED_COMPONENTS, ArticleDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    KnowledgeHubRoutingModule
  ],
  exports: [
    ...SHARED_COMPONENTS,
    RouterModule
  ],
})
export class KnowledgeHubModule {}
