import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Persona/Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/personas'

  getPersonas(){
    return this.http.get<Persona[]> (this.Url + '/listar');
  }

  crearPersona(persona:Persona){
    return this.http.post<Persona>(this.Url + '/agregar',persona);
  }

  getPersonaId(id:number){
    return this.http.get<Persona>(this.Url + "/byid/" + id);
  }

  actualizarPersona(persona:Persona){
    return this.http.put<Persona>(this.Url + "/actualizar/" + persona.id, persona);
  }

}
