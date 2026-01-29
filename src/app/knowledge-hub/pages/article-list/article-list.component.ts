import { Component, Input } from '@angular/core';
import { Article } from '../../models/article.model';
import { KnowledgeHubService } from '../../services/knowledge-hub.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  @Input() article!: Article;
featuredArticles: Article | undefined;
sideArticles: Article[] | undefined;
editorPicks: any;
latestArticles: any;

}
