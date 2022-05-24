import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private articulos: Array<any> = [
    {id: 'gfjhs', marca: 'Nike', modelo: 'Revolution', descripcion: 'Lorem ipsum', precio: 50},
    {id: 'gtduy', marca: 'Adidas', modelo: 'Pace', descripcion: 'Lorem ipsum', precio: 30},
    {id: 'kijst', marca: 'New Balance', modelo: 'Classic', descripcion: 'Lorem ipsum', precio: 40},
    {id: 'opsty', marca: 'Puma', modelo: 'Bolt', descripcion: 'Lorem ipsum', precio: 60},
  ]

  constructor() { }

  getArticulos(): Array<any> {
    return this.articulos;
  }

  getArticuloById(id: string) {
    return this.articulos.find(elem => elem.id === id);
  }


}
