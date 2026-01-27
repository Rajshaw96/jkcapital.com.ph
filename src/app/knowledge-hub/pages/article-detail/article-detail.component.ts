import { Component } from '@angular/core';
import { Article } from '../../models/article.model';
import { ActivatedRoute } from '@angular/router';
import { KnowledgeHubService } from '../../services/knowledge-hub.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent {
  article!: Article;

  constructor(
    private route: ActivatedRoute,
    private hub: KnowledgeHubService
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.params['slug'];
    this.hub.getArticle(slug).subscribe(res => this.article = res);
  }

  like() {
    this.hub.likeArticle(this.article.id).subscribe(() => {
      this.article.likes++;
    });
  }
}
