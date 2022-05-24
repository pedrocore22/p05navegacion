import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticulosService } from 'src/app/articulos.service';

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css']
})
export class CrearArticuloComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  marcas: Array<string> = ['Nike','Adidas','New Balance','Puma'];

  constructor(private articulosService: ArticulosService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      marca: new FormControl(''),
      modelo: new FormControl(''),
      descripcion: new FormControl(''),
      precio: new FormControl(null)
    })
  }

  addArticulo() {
    this.articulosService.addArticulo(this.form.value);
    this.router.navigate(['/articulos']);
  }

}
