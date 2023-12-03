import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Noticia } from '../interfaces/noticia';
import { Path } from './path';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {

  CONST_API_URL = new Path().URL_API;
  NOTICIAS = this.CONST_API_URL + '/publicacoes';
  //NOTICIAS = 'http://18.220.17.233:2077/api/publicacoes';

  constructor(private http: HttpClient) {}

  listarNoticias(): Observable<Noticia[]> {
    return this.http.get<any>(`${this.NOTICIAS}/list`).pipe(
      map((response) => {
        if (response && response.data) {
          return response.data as Noticia[];
        } else {
          console.error(
            'Resposta do backend não possui a propriedade "data".',
            response
          );
          return [];
        }
      }),
      catchError((error) => {
        console.error('Erro ao obter as notícias:', error);
        throw error;
      })
    );
  }

  verNoticia(id: number): Observable<Noticia> {
    return this.http.get<Noticia>(`${this.NOTICIAS}/view/${id}`);
  }

  criarNoticia(nome: string): Observable<Noticia> {
    return this.http.post<Noticia>(`${this.NOTICIAS}/add`, nome);
  }

  editarNoticia(id: number, nome: string): Observable<Noticia> {
    return this.http.patch<Noticia>(`${this.NOTICIAS}/edit/${id}`, nome);
  }

  deletarNoticia(id: number): Observable<unknown> {
    return this.http.delete<Noticia>(`${this.NOTICIAS}/delete/${id}`);
  }
}
