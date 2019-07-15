import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {
    path: 'usuario/registro',
    component: RegistroComponent
  },
  {
    path: 'usuario/login',
    component: LoginComponent
  },
  {
    path: 'usuario/logout',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
