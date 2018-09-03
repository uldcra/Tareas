import { Component, OnInit } from '@angular/core';
import { TareasService } from 'app/services/tareas/tareas.service';
import { Tarea } from 'app/model/Tarea.model';
import { Router } from '@angular/router';

declare var jquery:any;
declare var $:any;


@Component({
  selector: 'app-listartareas',
  templateUrl: './listartareas.component.html',
  styleUrls: ['./listartareas.component.css']
})
export class ListarTareasComponent implements OnInit {

  public nummero:number=0;
  public listarTareasa:Tarea;
  public estadoBorrar:number=0;
  constructor(private listarTareas:TareasService,private _router:Router) { }

  ngOnInit() {
    $(".text-success").hide();
  this.listarTareas.ListarTareas().subscribe(data=>{
    if(data.estado==520){
      this._router.navigate(['/login']);
    }else{
      this.listarTareasa=data.tareas;
    }
  
  });
  }
  Editar(id){
    this._router.navigate(['tareas/editar',id]);
  }
  Eliminar(id){
 
    this.listarTareas.borrarTarea(id).subscribe(data=>{
      if(data.estado==200){
        this.estadoBorrar=data.estado;
        console.log("dentro de la pericion de borrar : "+this.estadoBorrar);
        $(".text-success").fadeIn(1000,function(){
          
        });
        $(".text-success").delay(4000).fadeOut();
        this.listarTareas.ListarTareas().subscribe(data=>{
          if(data.estado==520){
            this._router.navigate(['/login']);
          }else{
            this.listarTareasa=data.tareas;
            console.log(this.listarTareasa);
          }
        
        });

      }
    });
    console.log(this.estadoBorrar);
   
   
    
  }
}
