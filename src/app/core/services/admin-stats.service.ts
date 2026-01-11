import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AdminStatsService {

  private API = 'http://localhost:5000/api/admin/stats';

  constructor(private http: HttpClient) {}

  getStats() {
    return this.http.get<any>(this.API);
  }
}
