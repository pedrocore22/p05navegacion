import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';
import { TablaArticulosComponent } from './tabla-articulos/tabla-articulos.component';
import { VisualizarArticuloComponent } from './visualizar-articulo/visualizar-articulo.component';

const routes: Routes = [
  {path:'', component: TablaArticulosComponent},
  {path:'visualizar-articulo/:id', component: VisualizarArticuloComponent},
  {path:'crear-articulo', component: CrearArticuloComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticulosRoutingModule { }
