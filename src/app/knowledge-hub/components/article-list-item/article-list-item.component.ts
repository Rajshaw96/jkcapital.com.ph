import { Component } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent {
  featuredArticles!: Article;
  sideArticles: Article[] = [];
  editorPicks: Article[] = [];
  latestArticles: Article[] = [];
  article: any;

  ngOnInit() {
    // assign from API
  }

}
