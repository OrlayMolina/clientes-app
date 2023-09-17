import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(){

  }

  //Con el metodo of convertimos nuestro listado de clientes en un string
  getClientes(): Observable<Cliente[]>{return of(CLIENTES);}
}
