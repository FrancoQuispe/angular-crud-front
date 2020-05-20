import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { ServiceService } from '../../Service/service.service';
import { Persona } from '../Modelo/Persona'


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  persona:Persona

  constructor(private router:Router, private servicio:ServiceService ) {
    this.persona=new Persona();
   }

  ngOnInit(): void {
  }

  public guardar(): void{

    this.servicio.crearPersona(this.persona)
    .subscribe(data=>{
      alert("Se agrego a la persona ");
      this.router.navigate(["listar"])
    });
  }

}
