import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Papel } from '../interfaces/papel';

@Injectable({
  providedIn: 'root',
})
export class PapeisService {
  PAPEIS = 'http://18.220.17.233:2077/api/tipo-papeis';

  constructor(private http: HttpClient) {}

  listarPapeis(): Observable<Papel[]> {
    return this.http.get<any>(`${this.PAPEIS}/list`).pipe(
      map((response) => {
        if (response && response.data) {
          return response.data as Papel[];
        } else {
          console.error(
            'Resposta do backend não possui a propriedade "data".',
            response
          );
          return [];
        }
      }),
      catchError((error) => {
        console.error('Erro ao obter os papéis:', error);
        throw error;
      })
    );
  }

  verPapel(id: number): Observable<Papel> {
    return this.http.get<Papel>(`${this.PAPEIS}/view/${id}`);
  }

  criarPapel(nome: string): Observable<Papel> {
    return this.http.post<Papel>(`${this.PAPEIS}/add`, nome);
  }

  editarPapel(id: number, nome: string): Observable<Papel> {
    return this.http.patch<Papel>(`${this.PAPEIS}/edit/${id}`, nome);
  }

  deletarPapel(id: number): Observable<unknown> {
    return this.http.delete<Papel>(`${this.PAPEIS}/delete/${id}`);
  }
}
