import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  blog: Blog | undefined;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {

    const slug = this.route.snapshot.paramMap.get('slug');

    this.blogService.getBlogs().subscribe((blogs: Blog[]) => {

      this.blog = blogs.find(blog => blog.slug === slug);

    });

  }

}