import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Path } from './path';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  
  //AUTH_API = 'http://18.220.17.233:2077/api/auth';
  CONST_API_URL = new Path().URL_API;
  AUTH_API = this.CONST_API_URL + '/auth';
login(email: string, password: string) {
    const body = {
      email: email,
      password: password
    };
  
    return this.http.post(`${this.AUTH_API}/login`, body, { withCredentials: true });
  }

  logout() {
    return this.http.post(
      `${this.AUTH_API}/logout`,
      {},
      { withCredentials: true }
    );
  }
}
