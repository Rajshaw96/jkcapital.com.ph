import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<Blog[]> {

    return this.http
      .get('assets/data/blogs-data.xml', { responseType: 'text' })
      .pipe(
        map(xml => this.parseXML(xml))
      );

  }

  private parseXML(xml: string): Blog[] {

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, 'text/xml');

    const items = xmlDoc.getElementsByTagName('item');

    const blogs: Blog[] = [];

    for (let i = 0; i < items.length; i++) {

      const item = items[i];

      const title = item.getElementsByTagName('title')[0]?.textContent || '';

      const slug = item.getElementsByTagName('wp:post_name')[0]?.textContent || '';

      const date = item.getElementsByTagName('pubDate')[0]?.textContent || '';

      const content = item.getElementsByTagName('content:encoded')[0]?.textContent || '';

      const category = item.getElementsByTagName('category')[0]?.textContent || '';

      blogs.push({
        title,
        slug,
        date,
        content,
        category,
        image: ''
      });

    }

    return blogs;

  }

}