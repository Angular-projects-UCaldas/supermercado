import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosModule } from './modulos/productos/productos.module';
import { ParametrosModule } from './modulos/parametros/parametros.module';
import { HomeComponent } from './template/home/home.component';
import { PageNotFoundComponent } from './template/page-not-found/page-not-found.component';
import { UsuariosModule } from './modulos/usuarios/usuarios.module';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ParametrosModule,
    ProductosModule,
    UsuariosModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
