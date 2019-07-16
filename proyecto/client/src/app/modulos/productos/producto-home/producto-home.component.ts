import { Component, OnInit } from '@angular/core';
import { ProductosModel } from 'src/app/modelos/producto.model';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-producto-home',
  templateUrl: './producto-home.component.html',
  styleUrls: ['./producto-home.component.css']
})
export class ProductoHomeComponent implements OnInit {

  constructor(private pdtService: ProductoService) { }

  listaProductos: ProductosModel [] = [];

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts():void{
this.pdtService.getAllProducts().subscribe(items => {
  this.listaProductos = items;
});
  }

}
