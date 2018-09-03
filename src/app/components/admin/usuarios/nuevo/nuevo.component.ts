import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { InsertarEmpleadoService } from '../../../../services/insertar-empleado.service';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  public mensajeError:boolean=false;
  public descripcion="Escribe el texto aqui";
  public empleado={
    nombre:"pepe",
    password:"",
    comentarios:"Escribe tus comentarios",
    tipo:"usuario"
  }
  public numero:number=0;
  constructor(private insertarUsuario:InsertarEmpleadoService) { }

  ngOnInit() {
  }

  ponerEmpleado(){
    if(this.empleado.nombre==""||this.empleado.password==""){
      this.mensajeError=true;
    }else{
      this.mensajeError=false;
      this.insertarUsuario.insertarEmpleado(this.empleado).subscribe(data=>{
        console.log(data);
      });
    }
   
    

  }
}
