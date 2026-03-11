import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  article$!: Observable<Article>;
  private readonly API_URL = 'assets/article-data/all-article-data.json';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Get slug or ID from URL and fetch data
    const slug = this.route.snapshot.paramMap.get('slug');
    this.article$ = this.http.get<Article>(`${this.API_URL}/${slug}`);
  }

  onSearch(term: string) {
    console.log('Searching for:', term);
  }
}