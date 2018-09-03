import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import   'rxjs/add/operator/map';
import   'rxjs/add/operator/catch';
import   'rxjs/add/observable/throw';


@Injectable()
export class asignarService {


    private url="http://localhost/tareas/datos/asignar/";
    private headers;
    private options;

    constructor(private http:Http){
        this.headers=new Headers({ 'Content-Type': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers });
    }

    ListarTareasUsusario(id){
        let tareaid=JSON.stringify({id:id});
        
        let headers=new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url+"listarTareasUsuario.php",tareaid,{headers:headers})
        .map(resp=>resp.json() ).catch(this._errorHandle);


}
ListarTareasUsusarioFecha(id_usuario,fecha){
    
    let id_fecha=JSON.stringify({usuario:id_usuario,fecha:fecha});
    
    let headers=new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url+"listarTareasFecha.php",id_fecha,{headers:headers})
    .map(resp=>resp.json() ).catch(this._errorHandle);


}


private _errorHandle(error:Response){
    return Observable.throw("podria ir mejor");
}
asignarTareausuario(id,tareaid,fecha){
    let tarea=JSON.stringify({id_usuario:id,id_tarea:tareaid,fecha:fecha});
    let headers=new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url+"asignar.php",tarea,{headers:headers}).map(
        resp=>resp.json());


}
borrarTareausuario(id){
    let tarea=JSON.stringify({id:id});
    let headers=new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.url+"borrar.php",tarea,{headers:headers}).map(
        resp=>resp.json());

}

}