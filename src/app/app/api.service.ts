import { Injectable } from '@angular/core';
import {loginI } from '../../modelos/login.interface';
import { responseI} from '../../modelos/response.interface';
import { peliculasI } from '../../modelos/peliculas.interface';
import {comentarioI} from '../../modelos/comentario.interface';
import {criticaI} from '../../modelos/critica.interface';
import {peliculasIDI} from '../../modelos/peliculasID.interface';
import {peliculasIDcomentarioI} from '../../modelos/peliculasIDcomentarios.interface';
import {peliculaIDcriticaI} from '../../modelos/peliculasIDcriticas.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = 'https://movies.z4.tdplab.com/api/';

  constructor(
    private http:HttpClient) { }
  
  
  
  obtenerPeliculas (limit:number , offset:number):Observable <peliculasI[]> {
    let direccion = this.url + "pelicula/?limit="+limit+"&offset="+offset;

    return this.http.get<peliculasI[]>(direccion);

  }

  comentario (limit:number , offset:number):Observable <comentarioI[]> {
    let direccion = this.url + "comentario/?limit="+limit+"&offset="+offset;

    return this.http.get<comentarioI[]>(direccion);
}

  critica (limit:number , offset:number):Observable <criticaI[]> {
  let direccion = this.url + "critica/?limit="+limit+"&offset="+offset;

  return this.http.get<criticaI[]>(direccion);
 }

 PeliculasID (id:number):Observable <peliculasIDI[]> {
  let direccion = this.url + "pelicula/"+ id;

  return this.http.get<peliculasIDI[]>(direccion);
 }
 
 PeliculasIDcomentarios(id:number):Observable <peliculasIDcomentarioI[]> {
  let direccion = this.url + "pelicula/"+ id+"/comentarios/";

  return this.http.get<peliculasIDcomentarioI[]>(direccion);
 }

 PeliculasIDcriticas(id:number):Observable <peliculaIDcriticaI[]> {
  let direccion = this.url + "pelicula/"+id+"/criticas";

  return this.http.get<peliculaIDcriticaI[]>(direccion);
 }

  loginByEmail(form:loginI):Observable<responseI>{
    let direccion =this.url + "token/";
    return this.http.post<responseI>(direccion,form);
  }
}