import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoCompleto } from 'src/app/interfaces/producto-completo.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: any;
  id?:string;

  constructor(private route: ActivatedRoute,
    public productoService: ProductosService) {

    this.route.params.subscribe(q => {
      // console.log(params);
      this.productoService.getProducto(q['id'])
        .subscribe(producto => {
          console.log('producto ', producto);
          this.producto = producto;
          this.id = q['id'];
        });
    });
  }

  ngOnInit(): void {
  }

}
