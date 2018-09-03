import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { asignarService } from 'app/services/asignar/asignar.service';

import { TareaAsignada } from 'app/model/Tarea.clase.model';
import { TareaModificada } from 'app/model/TareaModificada.clase.model';

import { TareasService } from 'app/services/tareas/tareas.service';
import {  asignarTareaService} from 'app/services/asignar/asignarTareaUsusario.service';


@Component({
    selector: 'app-name',
    templateUrl: './usuario.component.html',
   
})
export class UsuarioTareaComponent implements OnInit {
    
    public nombre:string;
    public id:string;
    public ListarTareas:TareaAsignada[];
    public ListaTareaUsuario:TareaModificada[]=[];
    constructor(
        public asignar:asignarService,
        public tareas:TareasService,
        public _estadoTarea:asignarTareaService
    ) { 
        this.nombre=localStorage.getItem("sesion");
        this.id=localStorage.getItem("id");
        this.ListarTareasUsuario();
    }

    ngOnInit() { }

    ListarTareasUsuario(){
        this.asignar.ListarTareasUsusario(this.id).subscribe(resp=>{
            
            this.ListarTareas=[];
            this.ListaTareaUsuario=[];
                 this.ListarTareas=resp;
                 console.log(resp);
                 
                 for(let i=0;i<this.ListarTareas.length;i++){
                     this.tareas.cogerTarea(this.ListarTareas[i].id_tarea).subscribe((data:any)=>{
                         //console.log(resp);
                         this.ListaTareaUsuario[i]={
                             id:this.ListarTareas[i].id,
                             Nombre:data.tareas[0].Nombre,
                             estado:this.ListarTareas[i].Estado,
                             fecha:this.ListarTareas[i].fecha
                         }
                       
                         
                     });
                 }
                 console.log(this.ListaTareaUsuario);
      });
      ///this.asignar.ListarTareasUsusario(this.usuarionumber);
    }
    pendiente(id){
        this._estadoTarea.actualizarEstadoTarea(id,"Pendiente").subscribe(resp=>{
            
            this.ListarTareasUsuario();
        });
        
    }
    enCurso(id){ console.log("en curso "+id);
        this._estadoTarea.actualizarEstadoTarea(id,"en Curso").subscribe(resp=>{
            this.ListarTareasUsuario();
        });
    }
    acabada(id){
        this._estadoTarea.actualizarEstadoTarea(id,"Acabada").subscribe(resp=>{
            this.ListarTareasUsuario();
        });
    }
}