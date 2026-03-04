import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Blog {
  title: string;
  slug: string;
  date: string;
  content: string;
  category: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    return this.http
      .get('assets/data/blogs-data.xml', { responseType: 'text' })
      .pipe(map(xml => this.parseXML(xml)));
  }

  private parseXML(xml: string): Blog[] {

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, 'text/xml');

    const items = Array.from(xmlDoc.getElementsByTagName('item'));

    const attachments: any = {};

    const blogs: Blog[] = [];

    // Step 1 — collect attachment images
    items.forEach((item: any) => {

      const postType = item.getElementsByTagName('wp:post_type')[0]?.textContent;

      if (postType === 'attachment') {

        const id = item.getElementsByTagName('wp:post_id')[0]?.textContent;
        const image = item.getElementsByTagName('guid')[0]?.textContent;

        if (id) {
          attachments[id] = image;
        }

      }

    });

    // Step 2 — parse blog posts
    items.forEach((item: any) => {

      const postType = item.getElementsByTagName('wp:post_type')[0]?.textContent;

      if (postType !== 'post') return;

      const title = item.getElementsByTagName('title')[0]?.textContent || '';

      const slug =
        item.getElementsByTagName('wp:post_name')[0]?.textContent || '';

      const date = item.getElementsByTagName('pubDate')[0]?.textContent || '';

      const content =
        item.getElementsByTagName('content:encoded')[0]?.textContent || '';

      const category =
        item.getElementsByTagName('category')[0]?.textContent || 'Blog';

      // find thumbnail id
      let thumbnailId = '';

      const meta = item.getElementsByTagName('wp:postmeta');

      for (let i = 0; i < meta.length; i++) {

        const key = meta[i].getElementsByTagName('wp:meta_key')[0]?.textContent;

        if (key === '_thumbnail_id') {

          thumbnailId =
            meta[i].getElementsByTagName('wp:meta_value')[0]?.textContent || '';

        }

      }

      const image = attachments[thumbnailId] || '';

      blogs.push({
        title,
        slug,
        date,
        content,
        category,
        image
      });

    });

    return blogs;

  }

}