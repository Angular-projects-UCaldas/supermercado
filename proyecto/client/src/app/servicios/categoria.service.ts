import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriaModel } from '../modelos/categoria.model';
const base_url: string = 'http://localhost:3000/api/'
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>(`${base_url}categorias`);
  }

  getCategoriaById(categoriaId: string): Observable<CategoriaModel> {
    return this.http.get<CategoriaModel>(`${base_url}categorias/${categoriaId}`);
  }

  saveNewCategoria(categoria: CategoriaModel): Observable<CategoriaModel> {
    return this.http.post<CategoriaModel>(`${base_url}categorias`, categoria, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  updateNewCategoria(categoria: CategoriaModel): Observable<CategoriaModel> {
    return this.http.put<CategoriaModel>(`${base_url}categorias`, categoria, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  deleteCategoria(categoriaId: String): Observable<CategoriaModel>{
    return this.http.delete<CategoriaModel>(`${base_url}categorias/${categoriaId}`);
    };
}
