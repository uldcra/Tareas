import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';

@Injectable()
export class SeguridadService implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if( localStorage.getItem("sesion")==null ){
      console.log('usuario no registrado');
      return false;
    }else{
      if(localStorage.getItem("tipo")=="admin"){
        return true;
      }
     return false;
    }
    
  }
}