import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos: ProductoInterface[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){
    this.http.get('https://angular-html-b400d-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe( (response: any) => {
      this.productos = response;
        this.cargando = false;
    });
  }


}
