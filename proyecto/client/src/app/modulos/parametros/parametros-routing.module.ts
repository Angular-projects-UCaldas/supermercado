import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCategoriaComponent } from './categoria/lista-categoria/lista-categoria.component';
import { CrearCategoriaComponent } from './categoria/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './categoria/editar-categoria/editar-categoria.component';


const routes: Routes = [
  {
    path: 'admin/categoria/lista',
    component: ListaCategoriaComponent
  },
  {
    path: 'admin/categoria/crear',
    component: CrearCategoriaComponent
  },
  {
    path: 'admin/categoria/editar/:id',
    component: EditarCategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
