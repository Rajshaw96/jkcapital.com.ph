import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { KnowledgeHubRoutingModule } from './knowledge-hub-routing.module';

import { ArticleListComponent } from './pages/article-list/article-list.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


const SHARED_COMPONENTS = [
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleCardComponent,
    PaginationComponent,
];
@NgModule({
  declarations: [...SHARED_COMPONENTS,],
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
