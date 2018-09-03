import { Component,OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {LooginService} from '../../services/login.service';
declare var jquery:any;
declare var $:any;


@Component({
  selector: 'app-registro',
  templateUrl:'./registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public primero="";
  
  public fecha:any;
  public usuario={
    nombre:"",
    password:""
  }
  constructor(private router:Router,private comprobar:LooginService){

  }
 
ngOnInit(){
  $('.alert-danger').hide();
}
  public login(){
    console.log("estas en login");
    this.comprobar.Login(this.usuario).subscribe(
      resp=>{
        if(resp.estado==200){
          localStorage.setItem("id",resp.usuario[0].id );
          localStorage.setItem("sesion",resp.usuario[0].Nombre );
          localStorage.setItem("tipo",resp.usuario[0].tipo );
          console.log(localStorage.getItem("id"));
         
          this.router.navigate(["/home"]);
        }else{
          localStorage.clear();
          $('.alert-danger').fadeIn(500,function(){
            $('.alert-danger').delay(2000).fadeOut();
          });
          console.log("error inesperado");
        }
        console.log(resp.estado);
      }
    );

      //localStorage.setItem("sesion","pepe");





   //this.router.navigate(['/home']);

  }
}
