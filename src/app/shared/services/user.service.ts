import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  USERS = 'http://18.220.17.233:2077/api/users';

  constructor(private http: HttpClient) {}

  listarUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(`${this.USERS}/list`);
  }
  verUsuario(id: number): Observable<User> {
    return this.http.get<User>(`${this.USERS}/view/${id}`);
  }
}
