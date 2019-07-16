import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProductosModel } from '../modelos/producto.model';


const base_url : string = 'http://localhost:3000/api/'
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ProductosModel[]>{
    return this.http.get<ProductosModel[]>(`${base_url}productos`);

  }
}
