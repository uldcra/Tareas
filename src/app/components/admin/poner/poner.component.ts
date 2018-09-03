import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';




declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-poner',
  templateUrl: './poner.component.html',
  styleUrls: ['./poner.component.css']
})
export class PonerComponent implements OnInit {

  public tarea:Tarea;
  public Listatarea:Tarea[]=[];
  public id:number;
  public sub:any;
  public texto:string="TEXTO EN MAYUSCULAS";
  constructor(private route:ActivatedRoute) { 
    console.log(this.texto.toLocaleLowerCase());
    
    this.tarea={
      nombre:"",
      descripcion:"tarea",
      fecha:""
    }
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   console.log(this.id);
  }

  ngOnInit() {
    
    
  }
  ponerTarea(){
    this.Listatarea.push(this.tarea);
  }

}
interface Tarea{
  nombre:string;
  descripcion:string;
  fecha:string;
}