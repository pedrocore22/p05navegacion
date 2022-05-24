import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { P404Component } from './p404/p404.component';
import { SoporteComponent } from './soporte/soporte.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'soporte', component: SoporteComponent},
  {path: '**', component: P404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
