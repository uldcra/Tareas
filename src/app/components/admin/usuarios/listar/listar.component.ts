import { Component, OnInit } from '@angular/core';
import { UsuarioLista } from '../../../../model/ListaUsuario.model';
import { ListarEmpleadosService } from '../../../../services/listar-empleados.service';
import { Router } from '@angular/router';
import { EditarUsuarioService } from 'app/services/editar-usuario.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public ListaUsusarios:any[];
  public seleccion:string;
  constructor(
    private listaUsuar:ListarEmpleadosService,
    private router: Router,
    private userDel:EditarUsuarioService
  ) { }

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


  ListaUsuarios(){
    let Lista:any[];
    this.listaUsuar.ListaEmpleados().subscribe(data=>{
      console.log(data);
    });

    
  }

  EditarUsuarios(id){
    this.router.navigate(['admin/Editar', id]);
  }
  
  EliminarUsuarios(id){
      this.userDel.borrarUsuario(id).subscribe(data=>{
          console.log(data);
      });
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

}
