import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaModel } from 'src/app/modelos/categoria.model';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {

  constructor(private catService: CategoriaService, private route: ActivatedRoute, private router: Router) { }

  categoria: CategoriaModel = {
    codigo: null,
    nombre: null,
    apellido: null,
    fechanacimiento: null,
    celular: null,
    talla: null,
    productos: null
  }

  ngOnInit() {
    this.buscarCategoria();
  }

  buscarCategoria(): void {
    let id = this.route.snapshot.params["id"];
    this.catService.getCategoriaById(id).subscribe(item => {
      this.categoria = item;
    })
  }
  updateCategoria() {
    this.catService.updateCategoria(this.categoria).subscribe(item => {
      alert('Esta categoria fue actulizada correctamente!');
      this.router.navigate(["/admin/categoria/lista"]);
    })
  }
}