import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { isNullOrUndefined } from 'util';
import { UsuarioModel } from 'src/app/modelos/usuario.model';
import { UsuariosModule } from 'src/app/modulos/usuarios/usuarios.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UsuarioService) { }

  userLogged: boolean = false;
  completeName: string = '';

  ngOnInit() {
    this.showMenu();
  }

  showMenu(): void {
    let userInfo: UsuarioModel = this.userService.getUserInformation() ;
    if (isNullOrUndefined(userInfo)) {
      this.userLogged = false;
    } else{
      this.userLogged = true;
      this.completeName = userInfo.realm;
    }
  }
}
