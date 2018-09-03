import { Component, OnInit,DoCheck } from '@angular/core';
import {NgForm} from '@angular/forms';
import { usuario } from '../../model/usuario.model';
import { ActivatedRoute } from '@angular/router';
import { EditarUsuarioService } from '../../services/editar-usuario.service';



@Component({
  selector: 'app-editar-ususario',
  templateUrl: './editar-ususario.component.html',
  styleUrls: ['./editar-ususario.component.css']
})
export class EditarUsusarioComponent implements OnInit,DoCheck {

  public usuario:usuario;
  public numero:number;
  public selectusuario:string="usuario";
  public selectadmin:string="admin";
  public seleccion:string="";

  constructor(private route:ActivatedRoute,private _editar:EditarUsuarioService) { 
    this.route.params.subscribe(params=>{
      this.numero=params.id;
    });
   
 
  
    
  }

  ngOnInit() {
    this._editar.cogerUsuario(this.numero).subscribe(data=>{
     
      this.usuario=data.usuario;
      console.log(this.usuario);
    });
    
  }

  ngDoCheck(){
    
  }
  Editar(){
   
     this._editar.actualizarUsuario(this.usuario).subscribe(data=>{
        console.log(data);
        if(data.estado==200){
          
        }
      });
  }

  ajustarValor(evento:any){
    console.log(event);
  }
}
