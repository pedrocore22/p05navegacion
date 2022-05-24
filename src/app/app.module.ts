import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SoporteComponent } from './soporte/soporte.component';
import { HeaderComponent } from './header/header.component';
import { P404Component } from './p404/p404.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SoporteComponent,
    HeaderComponent,
    P404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
