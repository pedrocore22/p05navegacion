import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticulosRoutingModule } from './articulos-routing.module';
import { TablaArticulosComponent } from './tabla-articulos/tabla-articulos.component';
import { VisualizarArticuloComponent } from './visualizar-articulo/visualizar-articulo.component';


@NgModule({
  declarations: [
    TablaArticulosComponent,
    VisualizarArticuloComponent
  ],
  imports: [
    CommonModule,
    ArticulosRoutingModule
  ]
})
export class ArticulosModule { }
