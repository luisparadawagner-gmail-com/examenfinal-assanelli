import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { CrearRutinaComponent } from './crear-rutina/crear-rutina.component';
import { TablaClienteComponent } from './tabla-cliente/tabla-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearClienteComponent,
    CrearRutinaComponent,
    TablaClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
