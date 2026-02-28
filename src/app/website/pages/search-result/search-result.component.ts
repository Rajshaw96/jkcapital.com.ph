import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import Fuse from 'fuse.js';
import { SEARCH_DATA } from 'src/assets/data/search-data';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  keyword = '';
  results: any[] = [];
  fuse: Fuse<any>;

  constructor(private route: ActivatedRoute) {

    this.fuse = new Fuse(SEARCH_DATA, {
      keys: ['title', 'content'],
      threshold: 0.4,
      ignoreLocation: true,
      minMatchCharLength: 2,
      useExtendedSearch: true
    });

    this.route.queryParams.subscribe(params => {
      this.keyword = params['q'] || '';
      if (this.keyword) {
        this.search();
      }
    });
  }

  search() {

    if (!this.keyword.trim()) {
      this.results = [];
      return;
    }

    // Exact phrase match first
    const phraseMatch = SEARCH_DATA.filter(page =>
      page.content.toLowerCase().includes(this.keyword.toLowerCase())
    );

    if (phraseMatch.length > 0) {
      this.results = phraseMatch.map(item => ({
        ...item,
        snippet: this.getSnippet(item.content)
      }));
      return;
    }

    // If no exact match, fallback to Fuse fuzzy search
    const fuseResults = this.fuse.search(this.keyword);

    this.results = fuseResults.map(r => ({
      ...r.item,
      snippet: this.getSnippet(r.item.content)
    }));
  }

  getSnippet(content: string) {
    const index = content.toLowerCase().indexOf(this.keyword.toLowerCase());
    if (index === -1) return content.substring(0, 150) + '...';
    const start = Math.max(index - 50, 0);
    return content.substring(start, start + 150) + '...';
  }
}