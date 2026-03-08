import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog.model';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser'; // Import these

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blog: Blog | undefined;
  safeContent: SafeHtml | undefined;
  safeMainImage: SafeUrl | undefined;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.blogService.getBlogs().subscribe((blogs: Blog[]) => {
        const foundBlog = blogs.find(b => b.slug === slug);

        if (foundBlog) {
          this.blog = foundBlog;
          if (this.blog.image) {
            this.safeMainImage = this.sanitizer.bypassSecurityTrustUrl(this.blog.image);
          }

          if (this.blog.content) {
            this.safeContent = this.sanitizer.bypassSecurityTrustHtml(this.blog.content);
            setTimeout(() => {
              this.fixWordPressImages();
            }, 100);
          }
        }
      });
    }
  }

  fixWordPressImages() {
    const images = document.querySelectorAll('.blog-content img');
    images.forEach((img: any) => {
      img.setAttribute('referrerpolicy', 'no-referrer');
      img.onerror = () => {
        if (img.srcset) {
          img.removeAttribute('srcset');
        }
      };
    });
  }
}