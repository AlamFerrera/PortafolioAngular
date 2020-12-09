import { HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { InfoPagina} from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    //Leer JSON
    this.http.get('assets/data/data-pagina.json').subscribe((resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
     // console.log(resp);
    });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-b400d-default-rtdb.firebaseio.com/equipo.json').subscribe((respuesta:any) => {
      //this.cargada = true;
      this.equipo = respuesta;
      console.log(respuesta);
    });
  }




}
