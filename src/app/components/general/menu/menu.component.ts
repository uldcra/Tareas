import { Component, OnInit,DoCheck } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit,DoCheck {

  public sesion:string;
  public tipoSesionAdmin:boolean=false;
  public tipoSesionUsuario:boolean=false;
  public usuario={
    nombre:""
  }
  constructor(private router:Router) {
    
    this.usuario.nombre=this.sesion;
    

   }
 
   getOut(){
    localStorage.removeItem("sesion");
    localStorage.removeItem("tipo");
    console.log(this.sesion);
    this.sesion=null;
    this.router.navigate(['/home']);
   }
   ngDoCheck() {
     
     //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
     //Add 'implements DoCheck' to the class.
    
        if( localStorage.getItem("sesion")==null|| localStorage.getItem("sesion")==""){
          this.sesion=null
         
        }else{
          this.sesion=localStorage.getItem("sesion");
          this.usuario.nombre=this.sesion;
          //console.log(localStorage.getItem("sesion"));
          if(localStorage.getItem("tipo")=="admin"){
            this.tipoSesionAdmin=true;
            this.tipoSesionUsuario=true;
          }else if(localStorage.getItem("tipo")=="usuario"){
            this.tipoSesionAdmin=false;
            this.tipoSesionUsuario=true;
          }else{
            this.tipoSesionAdmin=false;
            this.tipoSesionUsuario=false;
          }
          
        }
      
           
          
   }
   
   /*comprobarLogin():boolean{

    return true;
   }*/

  ngOnInit() {

  
  }

}
