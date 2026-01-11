import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SeoManagerService {

  private API = 'http://localhost:5000/api/seo';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.API);
  }

  create(data: any) {
    return this.http.post(this.API, data);
  }
}
