import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:5000/api/loan-applications';

  constructor(private http: HttpClient) {}

  submitLoanApplication(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
