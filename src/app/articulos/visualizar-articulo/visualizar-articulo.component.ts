import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from 'src/app/articulos.service';

@Component({
  selector: 'app-visualizar-articulo',
  templateUrl: './visualizar-articulo.component.html',
  styleUrls: ['./visualizar-articulo.component.css']
})
export class VisualizarArticuloComponent implements OnInit {

  articulo: any = {};

  constructor(private articulosService: ArticulosService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.articulo = this.articulosService.getArticuloById(id);
  }

}
