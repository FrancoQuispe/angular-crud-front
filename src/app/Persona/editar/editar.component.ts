import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Persona } from '../Modelo/Persona';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  persona:Persona;

  constructor(private router:Router, private servicio:ServiceService) {
    this.persona= new Persona();
  }

  ngOnInit(): void {

    this.editar();

  }

  editar(){
    let id=localStorage.getItem("id");
    this.servicio.getPersonaId(+id)
    .subscribe(data=>{
      this.persona=data;
    })
  }

  actualizar(persona:Persona){
    this.servicio.actualizarPersona(persona)
    .subscribe(data=>{
      this.persona=data;
      alert("Se actualizo con Exito!!");
      this.router.navigate(["listar"])
    })
  }

}
