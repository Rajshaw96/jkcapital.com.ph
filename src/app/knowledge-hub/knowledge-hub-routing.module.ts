import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllArticleListComponent } from './layout/all-article-list/all-article-list.component';
import { ArticleDetailsComponent } from './layout/article-details/article-details.component';


const routes: Routes = [
  {
    path: '',
    component: AllArticleListComponent
  },
  { path: 'all-articles', component: AllArticleListComponent },
  { path: ':slug', component: ArticleDetailsComponent }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowledgeHubRoutingModule {}
