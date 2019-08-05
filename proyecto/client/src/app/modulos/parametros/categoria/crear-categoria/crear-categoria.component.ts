import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from 'src/app/modelos/categoria.model';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {

  constructor(private catService: CategoriaService, private router: Router) {
    this.categoryFormGroup = this.formGroupCreator();
  }

  categoryFormGroup: FormGroup;

  formGroupCreator(): FormGroup {
    return new FormGroup({
      codigo: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      productos: new FormControl('', [Validators.maxLength(100)])
    });
  }

  get codigo() {
    return this.categoryFormGroup.get('codigo');
  }

  get nombre() {
    return this.categoryFormGroup.get('nombre');
  }

  get productos() {
    return this.categoryFormGroup.get('productos');
  }

  ngOnInit() {
  }

  saveNewCategoria(): void {
    if (this.categoryFormGroup.valid) {
      let categoria = this.buildCategoryData();
      this.catService.saveNewCategoria(categoria).subscribe(item => {
        alert("The category has been stored successfully!!!");
        this.router.navigate(["/admin/categoria/lista"]);
      });
      console.log("saved");
    } else {
      console.log("the form is invalid.");
    }
  }

  buildCategoryData(): CategoriaModel {
    let categoria: CategoriaModel = {
      codigo: this.codigo.value,
      nombre: this.nombre.value,
      apellido: null,
      fechanacimiento: null,
      celular: null,
      talla: null,
      id: null,
      productos: this.productos.value
    }
    return categoria;
  }

}
