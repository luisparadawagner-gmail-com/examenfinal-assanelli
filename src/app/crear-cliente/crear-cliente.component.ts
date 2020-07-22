import { Component, OnInit } from '@angular/core';
import  { FormBuilder } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src//app/Clase/Cliente';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private rutaActiva: ActivatedRoute,
              private router: Router) { }

cliente : Cliente;
registro : any;
            
clienteForm = this.fb.group({
})

ngOnInit(): void { 
  this.registro = this.rutaActiva.snapshot.params;

  if (Object.keys(this.registro).length) {
    this.cliente = this.registro;
  }

  this.initForm(this.cliente);
}

initForm(editarCliente: Cliente) {
  this.clienteForm = this.fb.group({
    nombre: [editarCliente ? editarCliente.nombre : ''],
    apellido: [editarCliente ? editarCliente.apellido : ''],
    direccion: [editarCliente ? editarCliente.direccion : ''],
    edad: [editarCliente ? editarCliente.edad : ''],
    fechaDeNacimiento: [editarCliente ? editarCliente.fechaDeNacimiento : ''],
  });
}

submit(){
  this.clienteForm.value;
  this.cliente = this.clienteForm.value;
  this.router.navigate(['/tabla-cliente-component', this.cliente]);   
}
}