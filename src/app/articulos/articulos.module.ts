import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticulosRoutingModule } from './articulos-routing.module';
import { TablaArticulosComponent } from './tabla-articulos/tabla-articulos.component';
import { VisualizarArticuloComponent } from './visualizar-articulo/visualizar-articulo.component';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TablaArticulosComponent,
    VisualizarArticuloComponent,
    CrearArticuloComponent
  ],
  imports: [
    CommonModule,
    ArticulosRoutingModule,
    ReactiveFormsModule
  ]
})
export class ArticulosModule { }
