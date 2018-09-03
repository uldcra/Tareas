import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { usuario } from 'app/model/usuario.model';
import { EditarUsuarioService } from 'app/services/editar-usuario.service';
import {NgForm} from '@angular/forms';
import { TareasService } from 'app/services/tareas/tareas.service';
import { asignarService } from 'app/services/asignar/asignar.service';

import { Tarea } from 'app/model/Tarea.model';



@Component({
    selector: 'app-empleado',
    templateUrl: './asignarTareaEmpleado.component.html',
    
})
export class asignarTareaEmpleadoComponent implements OnInit {

    public usuarionumber:number;
    public usuario:usuario={
        id:"0",
        Nombre:"",
        passwd:"",
        comentarios:"",
        tipo:"",
    };
    public seleccionar:string;
    public ListaTarea:any[];
    public ListaTareaUsuario:any[]=[{
        id:"",
        Nombre:"",
        fecha:""
    }];
    public Listaany:any[]=[];
    public fechaAsignada:any="";
    public fechaseleccionada:string="";
    constructor(
        private route:ActivatedRoute,
        private _empleado:EditarUsuarioService,
        private router:Router,
        private tareas:TareasService,
        private asignar:asignarService

    ) { 
        this.ListarTareas();

    }
ListarTareas(){
    this.asignar.ListarTareasUsusario(this.usuarionumber).subscribe(resp=>{
        
        this.Listaany=[];
        this.ListaTareaUsuario=[];
             this.Listaany=resp;
             console.log(resp);
             
             for(let i=0;i<this.Listaany.length;i++){
                 this.tareas.cogerTarea(this.Listaany[i].id_tarea).subscribe((data:any)=>{
                     //console.log(resp);
                     this.ListaTareaUsuario[i]={
                         id:this.Listaany[i].id,
                         Nombre:data.tareas[0].Nombre,
                         fecha:this.Listaany[i].fecha
                     }
                   
                     
                 });
             }
             
  });
  ///this.asignar.ListarTareasUsusario(this.usuarionumber);
}


    ngOnInit() { 
        this.route.params.subscribe(params=>{
            this.usuarionumber=params.id;
          });
         this._empleado.cogerUsuario(this.usuarionumber).subscribe(data=>{
           this.usuario=data.usuario[0];
         });
         this.tareas.ListarTareas().subscribe(data=>{
            
            this.ListaTarea=data.tareas;
         });
         this.ListarTareas();

    }
   
    fechasPedida(fecha){
        console.log(fecha);
        if(fecha==""||fecha==undefined||fecha==null){
            this.ListarTareas();
        }else{
            this.Listaany=[];
            this.ListaTareaUsuario=[];
            this.asignar.ListarTareasUsusarioFecha(this.usuarionumber,fecha).subscribe(resp=>{
                
                this.Listaany=[];
                     this.Listaany=resp.tarea;
                     console.log(resp.tarea);
                     
                     for(let i=0;i<this.Listaany.length;i++){
                         this.tareas.cogerTarea(this.Listaany[i].id_tarea).subscribe((data:any)=>{
                             //console.log(resp);
                             this.ListaTareaUsuario[i]={
                                 id:this.Listaany[i].id,
                                 Nombre:data.tareas[0].Nombre,
                                 fecha:this.Listaany[i].fecha
                             }
                           
                             
                         });
                     }
                     
          });
        }
        
        
    }

    asignarTarea(id_usuario,id_tarea,fecha){
  
        this.asignar.asignarTareausuario(id_usuario,id_tarea,fecha).subscribe(resp=>{
            console.log(resp);
            if(resp.estado==200){
                this.ListaTareaUsuario=[];
                this.ListarTareas();
            }
          

        });
        
    }
    borrarTarea(id_tarea){
        this.asignar.borrarTareausuario(id_tarea).subscribe(resp=>{
            this.ListaTareaUsuario=[];
            console.log("se ha borrado el usuario ");
            console.log(resp.estado);
            if(resp.estado==200){
                this.ListarTareas();
            }
            
            //this.router.navigate(['asignar/tarea',this.usuarionumber]);
            
        });
    
      
    }
}