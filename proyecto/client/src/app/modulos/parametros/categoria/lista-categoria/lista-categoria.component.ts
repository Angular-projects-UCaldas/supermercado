import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from 'src/app/modelos/categoria.model';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {

  constructor(private catService: CategoriaService) { }

  listaCategoria: CategoriaModel[] = [];

  ngOnInit() {
    this.getAllCategorias();
  }
  
  getAllCategorias(): void {
    this.catService.getAllCategories().subscribe(items => {
      this.listaCategoria = items;
    })
  }

}
