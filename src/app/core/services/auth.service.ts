import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private API = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string }) {
    return this.http.post<any>(`${this.API}/auth/login`, data).pipe(
      tap(res => localStorage.setItem('admin_token', res.token))
    );
  }

  logout() {
    localStorage.removeItem('admin_token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('admin_token');
  }
}
