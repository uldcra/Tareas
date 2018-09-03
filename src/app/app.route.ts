// Importar componentes y módulos para el routing 
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { HomeComponent } from './components/home/app.home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UsuariosComponent } from './components/admin/usuarios/usuarios.component';
import { EditarUsusarioComponent } from './components/editar-ususario/editar-ususario.component';
import { ListarComponent } from './components/admin/usuarios/listar/listar.component';
import { NuevoComponent } from './components/admin/usuarios/nuevo/nuevo.component';
import { TareasComponent } from './components/admin/tareas/tareas.component';
import { PonerComponent } from './components/admin/poner/poner.component';
import { AsignarComponent } from './components/admin/asignar/asignar.component';
import { asignarTareaEmpleadoComponent } from 'app/components/admin/asignar/tareaEmpleado/asignarTareaEmpleado.component';
import { UsuarioTareaComponent } from 'app/components/usuario/usuario.component';




import { TAREASROUTER } from './components/admin/tareas/tareas.router';
import { ASIGNARTAREAS } from './components/admin/asignar/asignar.route';


/**
 * Servicios
 */
import { CanActivate } from '@angular/router';

import { SeguridadService } from './services/seguridad.service';

// Configuración de las rutas
const appRoutes: Routes = [
  {
    path: 'home',component:HomeComponent
  },
 {
   path: '',pathMatch:'full', redirectTo:"home" 
 },
 {
      path: 'login', component: RegistroComponent 
  },
 
  {
    path:'admin' , 
    component:UsuariosComponent,
    canActivate:[SeguridadService]
    ,children:[
     
      
      { path: 'Editar/:id', component: EditarUsusarioComponent },
      { path: 'Nuevo', component: NuevoComponent },
      { path: 'Listar', component: ListarComponent },
      { path: '**', redirectTo: 'Editar', pathMatch: 'full' }
    ]
  },
  {
    path:'tareas' , 
    component:TareasComponent,
    canActivate:[SeguridadService]
    ,children:TAREASROUTER
  },
  {
    path:'poner/:id' , 
    component:PonerComponent,
    canActivate:[SeguridadService]
   
  },
  {
    path:'asignar' , 
    component:AsignarComponent,
    canActivate:[SeguridadService],
    children:ASIGNARTAREAS
    
  },
  {
    path:'Ver_tareas' , 
    component:UsuarioTareaComponent,
    //canActivate:[SeguridadService],
    
    
  },
  
  {
      path: '**',component:HomeComponent
  }
];


export const routing = RouterModule.forRoot(appRoutes);