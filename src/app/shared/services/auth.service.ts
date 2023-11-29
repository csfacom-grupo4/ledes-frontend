import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  AUTH_API = 'http://18.220.17.233:2077/api/auth';
  USERS = 'http://18.220.17.233:2077/api/users/list';

  login(email: string, password: string) {
    let params = new HttpParams().set('email', email).set('password', password);

    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    return this.http.post(`${this.AUTH_API}/login`, params.toString(), {
      headers,
    });
  }

  getUsers() {
    return this.http.get(`${this.USERS}`, { withCredentials: true });
  }

  logout() {
    return this.http.post(
      `${this.AUTH_API}/logout`,
      {},
      { withCredentials: true }
    );
  }
}
