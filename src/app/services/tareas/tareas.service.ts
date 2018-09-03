import { Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Tarea } from 'app/model/Tarea.model';

@Injectable()
export class TareasService {

  private url="http://localhost/";
  constructor(private http:Http) { }

  ListarTareas(){

    return this.http.get(this.url+"tareas/datos/tareas/ListarTareas.php").map(res=>res.json());
  }
  cogerTarea(id){
    let tarea=JSON.stringify({id:id});
    let headers=new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url+"tareas/datos/tareas/cogerTarea.php",tarea,{headers:headers}).map(resp=>resp.json());
  }
  nuevaTarea(tarea){
    console.log(tarea);
    let tareas=JSON.stringify({Nombre:tarea.Nombre,Descripcion:tarea.Descripcion});
   
    let headers=new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    console.log(tareas);
    return this.http.post(this.url+"tareas/datos/tareas/insertarTarea.php",tareas,{headers:headers}).map(resp=>resp.json());
    
  }
  actualizarTarea(tarea:Tarea){
    console.log(tarea);
    //let tareas=JSON.stringify({id:tarea.id,Nombre:tarea.Nombre,Descripcion:tarea.Descripcion});
    let tareas=JSON.stringify(tarea);
    let headers=new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    console.log(tareas);
    return this.http.post(this.url+"tareas/datos/tareas/actualizarTarea.php",tareas,{headers:headers}).map(resp=>resp.json());
    
  }

  borrarTarea(id){
    let usuarioa=JSON.stringify({id:id});
    let headers=new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    console.log(usuarioa);
    return this.http.post("http://localhost/tareas/datos/tareas/borrarTarea.php",usuarioa,options).map(res => res.json());
  }

}
