import { Component, OnInit } from '@angular/core';
import { ProductosModel } from 'src/app/modelos/producto.model';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  constructor(private pdtService: ProductoService, private route: ActivatedRoute) { }

  producto: ProductosModel = {
    codigo: null,
    nombre: null,
    origen: null,
    mayor: false,
    imagen: null,
    serial: 0,
    descripcion: null,
    id: null
  }

  ngOnInit() {
    this.getProductoInformacion();
  }

  getProductoInformacion(): void{
    let id = this.route.snapshot.params["id"];
    this.pdtService.getProductById(id).subscribe(item =>{
      this.producto = item;
    })
  }

}
