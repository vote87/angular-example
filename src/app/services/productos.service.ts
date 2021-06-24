import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: any[] = [];
  cargando = true;
  productoFiltrado: any[] = [];

  constructor(private http: HttpClient) {

    this.cargarProductos();

  }

  private cargarProductos() {

    return new Promise((resolve, reject) => {

      this.http.get('https://angular-html-d12bf-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe((data: any) => {
          this.productos = data;
          this.cargando = false;
          resolve(true);
          // setTimeout(() => {
          //   this.cargando = false;
          // }, 1000);
        });

    });


  }

  getProducto(id: string) {
    return this.http.get(`https://angular-html-d12bf-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(q: string) {

    this.productoFiltrado = [];
    if (this.productos.length === 0) {
      //cargar
      this.cargarProductos().then(() => {
        this.filtrarProducto(q);
      });
    } else {
      //filtrar
      this.cargarProductos().then((p) => {
        this.filtrarProducto(q);
        // console.log(this.productoFiltrado);
      });
    }

  }

  filtrarProducto(q: string) {
    this.productos.forEach((p) => {
      if (p['categoria'].toLowerCase().indexOf(q.toLowerCase()) >= 0 ||
        p['titulo'].toLowerCase().indexOf(q.toLowerCase()) >= 0) {
        this.productoFiltrado.push(p);
      }
    });

  }

}
