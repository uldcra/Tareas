import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ListarEmpleadosService } from 'app/services/listar-empleados.service';


@Component({
  selector: 'app-asignar',
  templateUrl: './listar.component.html',
  styles: []
})
export class ListarEmpleadoComponent implements OnInit {

  public ListaUsusarios:any;
  constructor(private listaUsuar:ListarEmpleadosService,private router:Router) { }

  ngOnInit() {
    this.listaUsuar.ListaEmpleados().subscribe(data=>{
      console.log(data);
      if(data.estado==200){
       
          this.ListaUsusarios=data.usuario;
          console.log(this.ListaUsusarios);
      }else{
        this.ListaUsusarios=null;
        console.log("Error inesperado");
      }
    });
    
  }
  asignar(id){
    this.router.navigate(['asignar/tarea',id]);
  }
}
