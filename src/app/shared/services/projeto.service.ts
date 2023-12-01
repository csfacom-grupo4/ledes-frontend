import { Projeto } from '../interfaces/projeto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjetoService {
  PROJETOS = 'http://18.220.17.233:2077/api/projetos';

  constructor(private http: HttpClient) {}

  listarProjetos(): Observable<Projeto[]> {
    return this.http.get<any>(`${this.PROJETOS}/list`).pipe(
      map((response) => {
        if (response && response.data) {
          return response.data as Projeto[];
        } else {
          console.error(
            'Resposta do backend não possui a propriedade "data".',
            response
          );
          return [];
        }
      }),
      catchError((error) => {
        console.error('Erro ao obter os projetos:', error);
        throw error;
      })
    );
  }

  verProjeto(id: number): Observable<Projeto> {
    return this.http.get<Projeto>(`${this.PROJETOS}/view/${id}`);
  }

  criarProjeto(nome: string): Observable<Projeto> {
    return this.http.post<Projeto>(`${this.PROJETOS}/add`, { nome: nome });
  }

  editarProjeto(id: number, nome: string): Observable<Projeto> {
    return this.http.patch<Projeto>(`${this.PROJETOS}/edit/${id}`, nome);
  }

  deletarProjeto(id: number): Observable<unknown> {
    return this.http.delete<unknown>(`${this.PROJETOS}/delete/${id}`, {
      withCredentials: true,
    });
  }
}
