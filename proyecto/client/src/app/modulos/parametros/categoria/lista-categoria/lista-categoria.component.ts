import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from 'src/app/modelos/categoria.model';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {

  constructor(private catService: CategoriaService, private route: Router, private spinner: NgxSpinnerService) { }


  cp: number = 1;
  total: number = 0;
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
      this.total = items.length;
    })
  }

  ChangeConfirmationButtons(id) {
    this.idToShowButtons = id;
    this.showConfirmationButtons = !this.showConfirmationButtons;
  }

  deleteCategory(categoryID: string): void {
    this.catService.deleteCategoria(categoryID).subscribe(item => {
      console.log(item);
      this.getAllCategorias();
    });
  }

  onPageChange(event):void{
     this.spinner.show();

      this.cp = event;
     setTimeout(() => {
       this.spinner.hide();
     }, 1000);
  }
}
