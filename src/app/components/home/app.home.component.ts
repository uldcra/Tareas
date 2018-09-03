import { Component, OnInit,DoCheck } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './app.home.component.html',
    styleUrls: []
})
export class HomeComponent implements OnInit,DoCheck {
    alerta:boolean=true;
    constructor() { }

    ngOnInit() { }
    ngDoCheck(){
       
    }
}