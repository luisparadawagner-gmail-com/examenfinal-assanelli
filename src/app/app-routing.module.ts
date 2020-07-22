import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaClienteComponent } from './tabla-cliente/tabla-cliente.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { CrearRutinaComponent } from './crear-rutina/crear-rutina.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: 'crear-cliente-component',component: CrearClienteComponent,},
  { path: 'crear-rutina-component', component: CrearRutinaComponent },
  { path: 'tabla-cliente-component', component: TablaClienteComponent },
  { path: '', redirectTo: 'tabla-cliente-component', pathMatch: 'full' },
  { path: '**', component: TablaClienteComponent },
  { path: '**', component: TablaClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
