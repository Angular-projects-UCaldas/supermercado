import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../servicios/usuario.service';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UrlInjectionGuard implements CanActivate {

  constructor(private userService: UsuarioService, private router: Router){

  }

  canActivate(){
    if(isNullOrUndefined(this.userService.getUserInformation())){
      this.router.navigate(["/usuario/login"]);
      return false;
    }else{
      return true;
    }
  }
  
}
