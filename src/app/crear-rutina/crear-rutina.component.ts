import { Component, OnInit } from '@angular/core';
import  { FormBuilder } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Rutinas } from '../Clase/Rutinas';

@Component({
  selector: 'app-crear-rutina',
  templateUrl: './crear-rutina.component.html',
  styleUrls: ['./crear-rutina.component.css']
})
export class CrearRutinaComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

    rutinas : Rutinas;
    registro : any;
  
    rutinaForm = this.fb.group({
     
    })
  
    ngOnInit(): void { 
      this.registro = this.rutaActiva.snapshot.params;
  
      if (Object.keys(this.registro).length) {
        this.rutinas = this.registro;
      }
  
      this.initForm(this.rutinas);
    }
  
    initForm(editarRutina: Rutinas) {
      this.rutinaForm = this.fb.group({
        nombreRutina: [editarRutina ? editarRutina.nombreRutina : ''],
        repeticiones: [editarRutina ? editarRutina.repeticiones : ''],
        peso: [editarRutina ? editarRutina.peso : ''],
        
      });
    }
  
    submit(){
      this.rutinaForm.value;
      this.rutinas = this.rutinaForm.value;
      this.router.navigate(['/tabla-cliente-component', this.rutinas]);   
    }
  }
  