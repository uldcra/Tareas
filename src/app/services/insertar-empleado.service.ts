import { Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class InsertarEmpleadoService {

  private url:string="http://localhost/tareas/datos/insertarEmpleados.php";
  constructor(private http:Http) { }

  insertarEmpleado(empleado){
    let usuarios=JSON.stringify({nombre:empleado.nombre,password:empleado.password,comentarios:empleado.comentarios,tipo:empleado.tipo});
    let headers=new Headers({ 'Content-Type': 'application/json' });
    
    return this.http.post(this.url,usuarios,{headers}).map(res=>res.json());
  }

}
