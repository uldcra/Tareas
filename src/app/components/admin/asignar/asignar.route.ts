import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListarEmpleadoComponent } from 'app/components/admin/asignar/listarEmpleado/listar.component';

import { asignarTareaEmpleadoComponent } from 'app/components/admin/asignar/tareaEmpleado/asignarTareaEmpleado.component';

export const ASIGNARTAREAS:Routes = [
    { path: '', component: ListarEmpleadoComponent },
    { path: 'tarea/:id', component: asignarTareaEmpleadoComponent },

  
];

