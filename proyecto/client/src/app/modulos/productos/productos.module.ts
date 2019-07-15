import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ListaProductosComponent } from './admin/lista-productos/lista-productos.component';
import { CrearProductosComponent } from './admin/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './admin/editar-productos/editar-productos.component';
import { ProductoHomeComponent } from './producto-home/producto-home.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';


@NgModule({
  declarations: [ListaProductosComponent, CrearProductosComponent, EditarProductosComponent, ProductoHomeComponent, ProductoDetalleComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ],
  exports:[
    ListaProductosComponent,
    CrearProductosComponent,
    EditarProductosComponent,
    ProductoHomeComponent,
    ProductoDetalleComponent
  ]
})
export class ProductosModule { }
