import { Component, OnInit } from '@angular/core';
import { TareasService } from 'app/services/tareas/tareas.service';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoTareaComponent implements OnInit {

  public nuevaTarea={
    Nombre:"Introduzca el nombre de la tarea",
    Descripcion:"Una Breve descripción de lo que consiste la tarea"
  }

  constructor(private Tarea:TareasService) { }

  ngOnInit() {
  }

  TareaNueva(){
    this.Tarea.nuevaTarea(this.nuevaTarea).subscribe(data=>{
      console.log(data);
    });
  }


}
