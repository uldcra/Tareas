import { Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { usuario } from 'app/model/usuario.model';


@Injectable()
export class EditarUsuarioService {

  constructor(private http:Http) {}

  cogerUsuario(id){
    let usuario=JSON.stringify({id:id});
    let headers=new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  return this.http.post("http://localhost/tareas/datos/editarUsuario.php",usuario,{headers:headers}).map(res => res.json());
  }

  actualizarUsuario(empleado){

    let usuarioa=JSON.stringify({id:empleado[0].id,Nombre:empleado[0].Nombre,password:empleado[0].passwd,comentarios:empleado[0].comentarios,tipo:empleado[0].tipo});
    let headers=new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    console.log(usuarioa);
    return this.http.put("http://localhost/tareas/datos/actualizar.php",usuarioa,{headers:headers}).map(res => res.json());
    
  }
  borrarUsuario(id){
    
        let usuarioa=JSON.stringify({id:id});
        let headers=new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        console.log(usuarioa);
        return this.http.post("http://localhost/tareas/datos/borrar.php",usuarioa,options).map(res => res.json());
        
      }
}
