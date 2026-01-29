import { Component, Input } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-featured-articles',
  templateUrl: './featured-articles.component.html',
  styleUrls: ['./featured-articles.component.css']
})
export class FeaturedArticlesComponent {
  @Input() featured!: Article;
  @Input() side: Article[] = [];
}
