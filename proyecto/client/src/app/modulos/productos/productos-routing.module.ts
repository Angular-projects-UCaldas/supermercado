import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductosComponent } from './admin/lista-productos/lista-productos.component';
import { CrearProductosComponent } from './admin/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './admin/editar-productos/editar-productos.component';
import { ProductoHomeComponent } from './producto-home/producto-home.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';


const routes: Routes = [
  {
    path: 'admin/productos/lista',
    component: ListaProductosComponent
  },
  {
    path: 'admin/productos/crear',
    component: CrearProductosComponent
  },
  {
    path: 'admin/productos/editar',
    component: EditarProductosComponent
  },
  {
    path: 'producto/home',
    component: ProductoHomeComponent
  },
  {
    path: 'producto/detalles',
    component: ProductoDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
