import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { KnowledgeHubRoutingModule } from './knowledge-hub-routing.module';

import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';

import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogSearchComponent } from './components/blog-search/blog-search.component';
import { BlogCategoriesComponent } from './components/blog-categories/blog-categories.component';
import { RecentPostsComponent } from './components/recent-posts/recent-posts.component';
import { LikeButtonComponent } from './components/like-button/like-button.component';
import { ShareButtonsComponent } from './components/share-buttons/share-buttons.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [
    BlogListComponent,
    BlogDetailComponent,
    BlogCardComponent,
    BlogSearchComponent,
    BlogCategoriesComponent,
    RecentPostsComponent,
    LikeButtonComponent,
    ShareButtonsComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    KnowledgeHubRoutingModule
  ]
})
export class KnowledgeHubModule {}
