import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KnowledgeHubService } from '../../services/knowledge-hub.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-all-article-list',
  templateUrl: './all-article-list.component.html',
  styleUrls: ['./all-article-list.component.css']
})
export class AllArticleListComponent implements OnInit {

  itemsPerPage = 4;

  categories: string[] = [];
  newsData: { [key: string]: Article[] } = {};
  categoryStep: { [key: string]: number } = {};

  constructor(
    private articleService: KnowledgeHubService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.articleService.getArticles().subscribe((data: any[]) => {

      const blockedCategories = [
        'business loan philippines',
        'business loan vs consumer loan'
      ];

      data.forEach(categoryBlock => {

        const categoryName = categoryBlock.categoryName;

        if (blockedCategories.includes(categoryName.toLowerCase())) {
          return;
        }

        this.categories.push(categoryName);

        // sort articles by date
        const sortedArticles = categoryBlock.articles.sort((a: Article, b: Article) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        this.newsData[categoryName] = sortedArticles;
        this.categoryStep[categoryName] = 0;

      });

      console.log("CATEGORY DATA:", this.newsData);

    });

  }

  next(category: string) {
    if (this.canMoveForward(category)) {
      this.categoryStep[category]++;
    }
  }

  prev(category: string) {
    if (this.categoryStep[category] > 0) {
      this.categoryStep[category]--;
    }
  }

  canMoveForward(category: string): boolean {
    const totalItems = (this.newsData[category] || []).length;
    const maxSteps = Math.ceil(totalItems / this.itemsPerPage) - 1;
    return this.categoryStep[category] < maxSteps;
  }

  openBlog(blog: Article) {

    // open external link
    if (blog.extlink && blog.extlink !== '') {
      window.open(blog.extlink, '_blank');
      return;
    }

    // open internal blog
    this.router.navigate(['/blog', blog.slug]);

  }

}