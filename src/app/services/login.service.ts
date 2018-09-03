import { Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class LooginService {

    private url:string="http://localhost/tareas/datos/comprobarLogin.php";
    constructor(private http:Http){

    }

Login(usuario){
    console.log(usuario);
    let usuarios=JSON.stringify({nombre:usuario.nombre,password:usuario.password});
    let headers=new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  return this.http.post("http://localhost/tareas/datos/comprobarLogin.php",usuarios,{headers:headers}).map(res => res.json());
}

}
