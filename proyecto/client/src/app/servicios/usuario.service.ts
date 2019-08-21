import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from 'src/app/modelos/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from 'querystring';
import { isNullOrUndefined } from 'util';

const base_url = 'http://localhost:3000/api/'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  tokenId: string = '';

  loginUser(email: string, password: string): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${base_url}Users/login?include=User`,
      {
        email: email,
        password: password
      },
      {
        headers: new HttpHeaders({
          "content-type": "application/json"
        })
      });

  }

  logoutUser() {
    localStorage.removeItem("usuarioInfo");
    localStorage.removeItem("userTk");
  }

  saveToken(token) {
    localStorage.setItem("userTk", token);
  }

  getToken(token) {
    return localStorage.getItem("userTk");
  }

  saveUserInformation(usuario: UsuarioModel): void {
    localStorage.setItem("usuarioInfo", JSON.stringify(usuario));
  }

  getUserInformation() {
    let userInfo = localStorage.getItem("usuarioInfo");
    if (isNullOrUndefined(userInfo)) {
      return null;
    }
    return (JSON.parse(userInfo));
  }
}
