import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriaModel } from '../modelos/categoria.model';
import { UsuarioService } from './usuario.service';
const base_url: string = 'http://localhost:3000/api/'
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient, private userService: UsuarioService) {
    this.token = this.userService.getToken();
   }

  token: string;

  getAllCategories(): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>(`${base_url}categorias?access_token=${this.token}`);
  }

  getCategoriaById(categoriaId: string): Observable<CategoriaModel> {
    return this.http.get<CategoriaModel>(`${base_url}categorias/${categoriaId}?access_token=${this.token}`);
  }

  saveNewCategoria(categoria: CategoriaModel): Observable<CategoriaModel> {
    return this.http.post<CategoriaModel>(`${base_url}categorias?access_token=${this.token}`, categoria, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  updateCategoria(categoria: CategoriaModel): Observable<CategoriaModel> {
    return this.http.put<CategoriaModel>(`${base_url}categorias?access_token=${this.token}`, categoria, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  deleteCategoria(categoriaId: String): Observable<CategoriaModel> {
    return this.http.delete<CategoriaModel>(`${base_url}categorias/${categoriaId}?access_token=${this.token}`);
  };
}
