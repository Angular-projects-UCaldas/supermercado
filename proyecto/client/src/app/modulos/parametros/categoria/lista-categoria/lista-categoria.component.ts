import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from 'src/app/modelos/categoria.model';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {

  constructor(private catService: CategoriaService, private route: Router) { }

  showConfirmationButtons: boolean = false;
  listaCategoria: CategoriaModel[] = [];
  idToShowButtons: string = '';
  ngOnInit() {
    this.getAllCategorias();
  }

  getAllCategorias(): void {
    this.catService.getAllCategories().subscribe(items => {
      /*console.log(items)*/
      this.listaCategoria = items;
    })
  }

  ChangeConfirmationButtons(id) {
    this.idToShowButtons = id;
    this.showConfirmationButtons = !this.showConfirmationButtons;
  }

  deleteCategory(categoryID: string): void {
    this.catService.deleteCategoria(categoryID).subscribe(item =>{
      console.log(item);
      this.route.navigate(['/admin/categoria/lista']);
    });
  }
}
