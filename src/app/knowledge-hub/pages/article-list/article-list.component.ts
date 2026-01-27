import { Component } from '@angular/core';
import { Article } from '../../models/article.model';
import { KnowledgeHubService } from '../../services/knowledge-hub.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  
  articles: Article[] = [];
  sort = 'latest';
  page = 1;

  constructor(private hub: KnowledgeHubService) {}

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles() {
    this.hub.getArticles({ sort: this.sort, page: this.page })
      .subscribe(res => this.articles = res);
  }
}
