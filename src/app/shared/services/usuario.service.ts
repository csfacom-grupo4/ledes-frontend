import { Usuario } from '../interfaces/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Path } from './path';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  //USUARIOS = 'http://18.220.17.233:2077/api/users';

  CONST_API_URL = new Path().URL_API;
  USUARIOS = this.CONST_API_URL + '/users';

  constructor(private http: HttpClient) {}

  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<any>(`${this.USUARIOS}/list`).pipe(
      map((response) => {
        if (response && response.data) {
          return response.data as Usuario[];
        } else {
          console.error(
            'Resposta do backend não possui a propriedade "data".',
            response
          );
          return [];
        }
      }),
      catchError((error) => {
        console.error('Erro ao obter os usuários:', error);
        throw error;
      })
    );
  }

  verUsuario(id: number): Observable<Usuario> {
    return this.http
      .get<any>(`${this.USUARIOS}/view/${id}`)
      .pipe(map((response) => response.data));
  }

  criarUsuario(nome: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.USUARIOS}/add`, { nome: nome });
  }

  editarUsuario(id: number, nome: string): Observable<Usuario> {
    return this.http.patch<Usuario>(`${this.USUARIOS}/edit/${id}`, nome);
  }

  deletarUsuario(id: number): Observable<unknown> {
    return this.http.delete<unknown>(`${this.USUARIOS}/delete/${id}`, {
      withCredentials: true,
    });
  }
}
