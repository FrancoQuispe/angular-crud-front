import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Persona/Modelo/Persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  operacion:string

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/personas'

  getPersonas(){
    return this.http.get<Persona[]> (this.Url + '/listar');
  }

}
