import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import   'rxjs/add/operator/map';
import   'rxjs/add/operator/catch';
import   'rxjs/add/observable/throw';


@Injectable()
export class asignarTareaService {


    private url="http://localhost/tareas/datos/asignar/usuarios/";
    private headers;
    private options;

    constructor(private http:Http){
        this.headers=new Headers({ 'Content-Type': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers });
    }

   actualizarEstadoTarea(id:any,estado:string){
        let tareaid=JSON.stringify({id:id,estado:estado});
        console.log(tareaid);
        let headers=new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url+"actualizarTarea.php",tareaid,{headers:headers}).map(resp=>resp.json()).catch(this._errorHandle);


}


private _errorHandle(error:Response){
    return Observable.throw(error);
}


}