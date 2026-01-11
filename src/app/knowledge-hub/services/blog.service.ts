import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({ providedIn: 'root' })
export class BlogService {
  getBlogBySlug(slug: string): Blog {
    throw new Error('Method not implemented.');
  }

  private blogs: Blog[] = [
    {
      id: '1',
      title: 'Understanding Business Loans in Philippines',
      slug: 'business-loans-philippines',
      excerpt: 'Learn how business loans work and how to apply.',
      content: '<p>Full content here...</p>',
      thumbnail: 'assets/blogs/blog1.jpg',
      category: 'Business Loans',
      author: 'JK Capital',
      createdAt: 'Jan 10, 2025',
      likes: 12,
      comments: 3
    },
    {
      id: '2',
      title: 'SME Financing Tips for Fast Growth',
      slug: 'sme-financing-tips',
      excerpt: 'Smart financing strategies for SMEs.',
      content: '<p>SME content here...</p>',
      thumbnail: 'assets/blogs/blog2.jpg',
      category: 'Finance Tips',
      author: 'JK Capital',
      createdAt: 'Jan 15, 2025',
      likes: 8,
      comments: 1
    }
  ];

  getBlogs(): Blog[] {
    return this.blogs;
  }

  getCategories(): string[] {
    return [...new Set(this.blogs.map(b => b.category))];
  }
}
