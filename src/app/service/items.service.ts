import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  cargando = true;
  productoDedc: ProductoDescripcion[] = [];


  constructor( private http: HttpClient ) {

  }



  getProducto( id: string ) {

    return this.http.get(`https://dpeluche.com/api/dpelucheInicio.php?peluche=${ id }`);

  }


}
