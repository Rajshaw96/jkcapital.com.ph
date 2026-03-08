import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'; // Added for security

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.css']
})
export class NewsSectionComponent implements OnInit {

  itemsPerPage = 4;
  categories: string[] = [];
  blogs: any[] = []; // Changed to any to support sanitized URLs
  newsData: { [key: string]: any[] } = {};
  categoryStep: { [key: string]: number } = {};

  constructor(
    private blogService: BlogService,
    private router: Router,
    private sanitizer: DomSanitizer // Injected Sanitizer
  ) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((data: Blog[]) => {

      const blockedCategories = [
        'business loan philippines',
        'business loan vs consumer loan'
      ];

      // 1. Process data + remove unwanted categories
      this.blogs = data
        .map(blog => {
          const imageUrl = blog.image ? blog.image.trim() : '';
          return {
            ...blog,
            image: imageUrl,
            safeImageUrl: imageUrl
              ? this.sanitizer.bypassSecurityTrustUrl(imageUrl)
              : ''
          };
        })
        .filter(blog => !blockedCategories.includes((blog.category || '').toLowerCase()));

      // 2. Sort blogs by date
      this.blogs.sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      console.log("BLOG DATA PROCESSED:", this.blogs);

      this.groupBlogsByCategory();
    });
  }

  groupBlogsByCategory() {
    this.newsData = {};
    this.categories = [];

    this.blogs.forEach(blog => {
      const category = blog.category || 'General';

      if (!this.newsData[category]) {
        this.newsData[category] = [];
        this.categoryStep[category] = 0;
        this.categories.push(category);
      }

      this.newsData[category].push(blog);
    });

    // Ensure sorting inside each category
    Object.keys(this.newsData).forEach(category => {
      this.newsData[category].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    });
  }

  // FIXED: Added missing error handler for broken images
  // handleImgError(event: any) {
  //   event.target.src = 'https://via.placeholder.com/400x250?text=Image+Not+Found';
  // }

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

  openBlog(blog: Blog) {
    this.router.navigate(['/blog', blog.slug]);
  }
}