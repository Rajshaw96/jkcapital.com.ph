import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.css']
})

export class NewsSectionComponent implements OnInit {

  itemsPerPage = 4;

  categories: string[] = [];

  blogs: Blog[] = [];

  newsData: { [key: string]: Blog[] } = {};

  categoryStep: { [key: string]: number } = {};

  constructor(
  private blogService: BlogService,
  private router: Router
  ) {}

  ngOnInit(): void {


  this.blogService.getBlogs().subscribe((data: Blog[]) => {

    // Sort blogs by date (latest first)
    this.blogs = data.sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    console.log("BLOG DATA:", this.blogs); // check if image exists

    this.groupBlogsByCategory();

  });


  }

  groupBlogsByCategory() {
debugger;

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
