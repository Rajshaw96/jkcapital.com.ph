import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './pages/article-list/article-list.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';


const routes: Routes = [
  {
    path: '',
    component: ArticleListComponent
  },
  { path: 'artical', component: ArticleListComponent },
  { path: ':slug', component: ArticleDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowledgeHubRoutingModule {}
