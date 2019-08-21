import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductosComponent } from './admin/lista-productos/lista-productos.component';
import { CrearProductosComponent } from './admin/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './admin/editar-productos/editar-productos.component';
import { ProductoHomeComponent } from './producto-home/producto-home.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { UrlInjectionGuard } from 'src/app/guards/url-injection.guard';


const routes: Routes = [
  {
    path: 'admin/productos/lista',
    component: ListaProductosComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  },
  {
    path: 'admin/productos/crear',
    component: CrearProductosComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  },
  {
    path: 'admin/productos/editar',
    component: EditarProductosComponent,
    canActivate: [
      UrlInjectionGuard
    ]
  },
  {
    path: 'producto/home',
    component: ProductoHomeComponent
  },
  {
    path: 'producto/detalles/:id',
    component: ProductoDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
