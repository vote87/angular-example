import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[] = [];
  cargando = true;

  constructor(private http: HttpClient) {

    this.cargarProductos();

  }

  private cargarProductos() {
    this.http.get('https://angular-html-d12bf-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((data: any) => {
        // console.log(data);
        this.productos = data;
        console.log(this.productos);

        setTimeout(() => {
          this.cargando = false;          
        }, 1000);
      });
  }

}
