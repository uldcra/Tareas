import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class ListarEmpleadosService {

  private url:string="http://localhost/tareas/datos/ListarEmpleados.php";
  constructor(private http:Http) { }

  ListaEmpleados() {                   
    let headers=new Headers({ 'Content-Type': 'application/json' });
     return this.http.get(this.url).map(res=>res.json());
  }


  
}
