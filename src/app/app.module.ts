import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
/**
 * Componentes
 */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/app.home.component';
/*
*Rutas
*/
import { routing } from './app.route';
import { RegistroComponent } from './components/registro/registro.component';

import { FormsModule }   from '@angular/forms';
import { MenuComponent } from './components/general/menu/menu.component';
/**
 * Servicios
 */
import { SeguridadService } from './services/seguridad.service';
import {LooginService} from './services/login.service';
import { InsertarEmpleadoService } from './services/insertar-empleado.service';
import { ListarEmpleadosService } from './services/listar-empleados.service';
import { EditarUsuarioService } from './services/editar-usuario.service';
import { TareasService } from './services/tareas/tareas.service';
import { asignarService } from './services/asignar/asignar.service';
import {  asignarTareaService} from 'app/services/asignar/asignarTareaUsusario.service';

/*
* Componentes
*/
import { UsuariosComponent } from './components/admin/usuarios/usuarios.component';
import { EditarUsusarioComponent } from './components/editar-ususario/editar-ususario.component';
import { ListarComponent } from './components/admin/usuarios/listar/listar.component';
import { NuevoComponent } from './components/admin/usuarios/nuevo/nuevo.component';
import { TareasComponent } from './components/admin/tareas/tareas.component';
import { ListarTareasComponent } from './components/admin/tareas/listar/listartareas.component';
import { NuevoTareaComponent } from './components/admin/tareas/nuevo/nuevo.component';
import { PonerComponent } from './components/admin/poner/poner.component';
import { EditarTareasComponent } from './components/admin/tareas/editar-tareas/editar-tareas.component';
import { AsignarComponent } from './components/admin/asignar/asignar.component';
import { ListarEmpleadoComponent } from 'app/components/admin/asignar/listarEmpleado/listar.component';

import { asignarTareaEmpleadoComponent } from 'app/components/admin/asignar/tareaEmpleado/asignarTareaEmpleado.component';

import { UsuarioTareaComponent } from 'app/components/usuario/usuario.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    MenuComponent,
    UsuariosComponent,
    EditarUsusarioComponent,
    ListarComponent,
    NuevoComponent,
    TareasComponent,
    ListarTareasComponent,
    NuevoTareaComponent,
    PonerComponent,
    EditarTareasComponent,
    AsignarComponent,
    ListarEmpleadoComponent,
    asignarTareaEmpleadoComponent,
    UsuarioTareaComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [
    SeguridadService,
    LooginService,
    InsertarEmpleadoService,
    ListarEmpleadosService,
    EditarUsuarioService,
    TareasService,
    asignarService,
    asignarTareaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
