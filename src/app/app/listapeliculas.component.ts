import { Component, OnInit } from '@angular/core';
import {ApiService } from '../../servicio/api/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listapeliculas',
  templateUrl: './listapeliculas.component.html',
  styleUrls: ['./listapeliculas.component.css']
})
export class ListapeliculasComponent implements OnInit {


  constructor(private api:ApiService, private Router:Router) { }

  ngOnInit(): void {
    this.api.obtenerPeliculas(10,1).subscribe(datos=>{
      console.log(datos)
    })

    this.api.comentario(8,1).subscribe(datos=>{
      console.log(datos)
    })

    this.api.critica(8,1).subscribe(datos=>{
      console.log(datos)
    })

    this.api.PeliculasID(1).subscribe(datos=>{
      console.log(datos)
    })

    this.api.PeliculasIDcomentarios(5).subscribe(datos=>{
      console.log(datos)
    })
    
    this.api.PeliculasIDcriticas(3).subscribe(datos=>{
      console.log(datos)
    })
  
}

}
