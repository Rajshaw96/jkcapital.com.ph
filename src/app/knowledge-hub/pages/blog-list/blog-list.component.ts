import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html'
})
export class BlogListComponent implements OnInit {

  blogs: Blog[] = [];
  filteredBlogs: Blog[] = [];
  categories: string[] = [];

  searchTerm = '';
  selectedCategory = 'All';

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
    this.filteredBlogs = [...this.blogs];
    this.categories = this.blogService.getCategories();
  }

  onSearch(term: string) {
    this.searchTerm = term.toLowerCase();
    this.applyFilters();
  }

  onCategorySelect(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredBlogs = this.blogs.filter(blog => {
      const matchesSearch =
        blog.title.toLowerCase().includes(this.searchTerm) ||
        blog.excerpt.toLowerCase().includes(this.searchTerm);

      const matchesCategory =
        this.selectedCategory === 'All' ||
        blog.category === this.selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }
}
