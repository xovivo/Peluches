import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  peluchu: ProductoDescripcion;
  id: string;
  productoDedc: ProductoDescripcion[] = [];

  constructor( private route: ActivatedRoute,
               public itemService: ProductosService ) { }

  ngOnInit() {

    this.getItem();


  }
private getItem() {

  this.route.params
  .subscribe( parametros => {
    // console.log(parametros['id']);
    this.itemService.getProducto(parametros['id'])
          .subscribe( (peluchu: ProductoDescripcion) => {
           this.id = parametros['id'];
            this.peluchu = peluchu;
          });
  });
}
}
