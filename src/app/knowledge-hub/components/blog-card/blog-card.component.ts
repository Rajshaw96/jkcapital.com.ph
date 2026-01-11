import { Component, Input } from '@angular/core';
import { Blog } from '../../models/blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html'
})
export class BlogCardComponent {

  @Input() blog!: Blog;

  constructor(private router: Router) {}

  openBlog() {
    this.router.navigate(['/knowledge-hub', this.blog.slug]);
  }
}
