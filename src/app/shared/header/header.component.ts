import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _servicio:InfoPaginaService, private router: Router) { }

  buscarProducto(p_value:string){

    if(p_value.length < 1){
      return;
    }
    this.router.navigate(['/search', p_value]);
  }

  ngOnInit(): void {
  }

}
