import { Vinculo } from './../interfaces/vinculo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Path } from './path';

@Injectable({
  providedIn: 'root',
})
export class VinculosService {
 // VINCULOS = 'http://18.220.17.233:2077/api/tipo-vinculos';

  CONST_API_URL = new Path().URL_API;
  VINCULOS = this.CONST_API_URL + '/tipo-vinculos';

  constructor(private http: HttpClient) {}

  listarVinculos(): Observable<Vinculo[]> {
    return this.http.get<any>(`${this.VINCULOS}/list`).pipe(
      map((response) => {
        if (response && response.data) {
          return response.data as Vinculo[];
        } else {
          console.error(
            'Resposta do backend não possui a propriedade "data".',
            response
          );
          return [];
        }
      }),
      catchError((error) => {
        console.error('Erro ao obter os vínculos:', error);
        throw error;
      })
    );
  }

  verVinculo(id: number): Observable<Vinculo> {
    return this.http.get<Vinculo>(`${this.VINCULOS}/view/${id}`);
  }

  criarVinculo(nome: string): Observable<Vinculo> {
    return this.http.post<Vinculo>(`${this.VINCULOS}/add`, { nome: nome });
  }

  editarVinculo(id: number, nome: string): Observable<Vinculo> {
    return this.http.patch<Vinculo>(`${this.VINCULOS}/edit/${id}`, nome);
  }

  deletarVinculo(id: number): Observable<unknown> {
    return this.http.delete<unknown>(`${this.VINCULOS}/delete/${id}`, {
      withCredentials: true,
    });
  }
}
