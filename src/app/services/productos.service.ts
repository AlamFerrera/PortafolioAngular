import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {
  cargando = true;
  productos: ProductoInterface[] = [];
  productoFiltrado: ProductoInterface[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){

    return new Promise((resolve, reject) => {
      this.http.get('https://angular-html-b400d-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (response: any) => {
        this.productos = response;
          this.cargando = false;
          resolve();
      });
    });

   
  }

  getProducto(id:string){
   return this.http.get(`https://angular-html-b400d-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(p_value: string){

    if(this.productos.length === 0){
        this.cargarProductos().then( ()=> {
          this.filtrarProductos(p_value);
        });
    }
    else{
      this.filtrarProductos(p_value);
    }
  }

  private filtrarProductos(p_value: string){
    //console.log(this.productos);
    this.productoFiltrado = [];
    p_value = p_value.toLowerCase();
    this.productos.forEach(prod => {
      const tituloLower = prod.titulo.toLowerCase();
        if(prod.categoria.indexOf(p_value) >= 0 ||tituloLower.indexOf(p_value) >= 0){
          this.productoFiltrado.push(prod);
        }
    });
  }


}
