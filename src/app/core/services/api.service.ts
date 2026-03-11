import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:5000/api/loan-applications';

  constructor(private http: HttpClient) {}

  // CREATE APPLICATION (STEP 1)
  submitLoanApplication(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // UPDATE APPLICATION (STEP 2)
  updateLoanApplication(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${data.id}`, data);
  }

}