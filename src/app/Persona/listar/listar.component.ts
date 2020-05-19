
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Observable } from 'rxjs'

import { ServiceService } from '../../Service/service.service';
import { Persona } from '../Modelo/Persona';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas: Persona[];

  constructor( private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.leerDatos();
  }

  leerDatos(){
    this.service.getPersonas().subscribe(data=>{this.personas=data;})
  }

}
