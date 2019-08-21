import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FormLoginGuard } from 'src/app/guards/form-login.guard';
import { UrlInjectionGuard } from 'src/app/guards/url-injection.guard';


const routes: Routes = [
  {
    path: 'usuario/registro',
    component: RegistroComponent,
    canActivate:[
      FormLoginGuard
    ]
  },
  {
    path: 'usuario/login',
    component: LoginComponent,
    canActivate:[
      FormLoginGuard
    ]
  },
  {
    path: 'usuario/logout',
    component: LogoutComponent,
    canActivate:[
      UrlInjectionGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
