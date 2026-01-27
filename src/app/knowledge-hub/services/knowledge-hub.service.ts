import { HttpClient } from "@angular/common/http";
import { Article } from "../models/article.model";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class KnowledgeHubService {

  constructor(private http: HttpClient) {}

  getArticles(params?: any) {
    return this.http.get<Article[]>('/api/articles', { params });
  }

  getArticle(slug: string) {
    return this.http.get<Article>(`/api/articles/${slug}`);
  }

  likeArticle(id: number) {
    return this.http.post(`/api/articles/${id}/like`, {});
  }
}
