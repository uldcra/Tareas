import { Routes, RouterModule } from '@angular/router';


import { ListarTareasComponent } from './listar/listartareas.component';
import { NuevoTareaComponent } from './nuevo/nuevo.component';
import { EditarTareasComponent } from './editar-tareas/editar-tareas.component';



export const TAREASROUTER: Routes = [
    { path: '', component: ListarTareasComponent },
    { path: 'nuevo', component: NuevoTareaComponent },
    { path: 'editar/:id', component: EditarTareasComponent },
    { path: '**', component: ListarTareasComponent,pathMatch:"full" },

];


