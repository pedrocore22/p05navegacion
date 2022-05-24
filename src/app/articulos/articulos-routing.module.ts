import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaArticulosComponent } from './tabla-articulos/tabla-articulos.component';
import { VisualizarArticuloComponent } from './visualizar-articulo/visualizar-articulo.component';

const routes: Routes = [
  {path:'', component: TablaArticulosComponent},
  {path:'visualizar-articulo/:id', component: VisualizarArticuloComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticulosRoutingModule { }
