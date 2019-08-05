import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { ListaCategoriaComponent } from './categoria/lista-categoria/lista-categoria.component';
import { CrearCategoriaComponent } from './categoria/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './categoria/editar-categoria/editar-categoria.component';


@NgModule({
  declarations: [ListaCategoriaComponent, CrearCategoriaComponent, EditarCategoriaComponent],
  imports: [
    CommonModule,
    ParametrosRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
  ], 
  exports: [
    ListaCategoriaComponent,
    CrearCategoriaComponent,
    EditarCategoriaComponent
  ]
})
export class ParametrosModule { }
