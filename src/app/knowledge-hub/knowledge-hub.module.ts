import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { KnowledgeHubRoutingModule } from './knowledge-hub-routing.module';

import { ArticleListComponent } from './pages/article-list/article-list.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    KnowledgeHubRoutingModule
  ]
})
export class KnowledgeHubModule {}
