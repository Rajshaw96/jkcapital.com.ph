import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://your-api-url.com/api/loan-application';

  constructor(private http: HttpClient) {}

  submitLoanApplication(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
