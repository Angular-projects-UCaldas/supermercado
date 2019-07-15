import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [LoginComponent, LogoutComponent, RegistroComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ],
  exports: [
    RegistroComponent,
    LoginComponent,
    LogoutComponent
  ]
})
export class UsuariosModule { }
