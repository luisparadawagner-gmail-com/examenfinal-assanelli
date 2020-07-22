import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { CrearRutinaComponent } from './crear-rutina/crear-rutina.component';
import { TablaClienteComponent } from './tabla-cliente/tabla-cliente.component';
import { ComponentConsultarService } from './Servicio/component-consultar-service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';


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
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NoopAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [ComponentConsultarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
