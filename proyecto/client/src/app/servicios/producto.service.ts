import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProductosModule } from '../modulos/productos/productos.module';


const base_url : string = 'http://localhost:3000/api/'
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  gelAllProducts(): Observable<ProductosModule[]>{
    return this.http.get<ProductosModule[]>(`${base_url}productos`);

  }
}
