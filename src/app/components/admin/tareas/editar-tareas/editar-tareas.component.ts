import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TareasService  } from '../../../../services/tareas/tareas.service';
import { Tarea } from 'app/model/Tarea.model';


@Component({
  selector: 'app-editar-tareas',
  templateUrl: './editar-tareas.component.html',
  styles: []
})
export class EditarTareasComponent implements OnInit {

  public sub:any;
  public id:number;
  public tareas:any;
  public tarea:Tarea={
    id:"",
    Nombre:"",
    Descripcion:""

  }
  constructor(private actiRoute:ActivatedRoute,private cogerTareas:TareasService) { }

  ngOnInit() {
    this.sub = this.actiRoute.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   this.cogerTareas.cogerTarea(this.id).subscribe(data=>{

    console.log(data);
    this.tarea.id=data.tareas[0].id;
    this.tarea.Nombre=data.tareas[0].Nombre;
    this.tarea.Descripcion=data.tareas[0].Descripcion;

   });
  }

  guardarTarea(){
    this.cogerTareas.actualizarTarea(this.tarea).subscribe(data=>{
      console.log(data);
    });
  }
}
