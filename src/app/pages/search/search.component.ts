import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    public _s: ProductosService) { }

  ngOnInit(): void {

    this.route.params
      .subscribe(q => {
        // console.log(q['q']);
        this._s.buscarProducto(q['q']);
        // console.log(this._s.productoFiltrado);
      })
  }

}
