import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PapeisService {
  PAPEIS = 'http://18.220.17.233:2077/api/tipo-papeis';

  constructor(private http: HttpClient) {}

  listarPapeis(): Observable<any> {
    return this.http.get(`${this.PAPEIS}/list`);
  }

  verPapel(id: number): Observable<any> {
    return this.http.get(`${this.PAPEIS}/view/${id}`);
  }

  criarPapel(nome: string): Observable<any> {
    return this.http.post(`${this.PAPEIS}/add`, nome);
  }

  editarPapel(id: number, nome: string): Observable<any> {
    return this.http.patch(`${this.PAPEIS}/edit/${id}`, nome);
  }

  deletarPapel(id: number): Observable<any> {
    return this.http.delete(`${this.PAPEIS}/delete/${id}`);
  }
}
