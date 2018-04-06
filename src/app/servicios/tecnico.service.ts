import { Injectable } from '@angular/core';

import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Tecnico} from '../models/tecnico.service';

@Injectable()
export class TecnicoService {

  listTecnico : AngularFireList<any>;
  selectedTecnico : Tecnico = new Tecnico();

  constructor(private firebase :AngularFireDatabase) { }

  // metodos propios
  getTecnicos(){
    return this.listTecnico=this.firebase.list('tecnico');
  }
  //insert
  insertTecnico(tecnico :Tecnico){
    this.listTecnico.push({
      nombre   :tecnico.nombre,
      direccion:tecnico.direccion,
      correo   :tecnico.correo,
      telefono :tecnico.telefono
    });
  }
  // update
  updateTecnico(tecnico :Tecnico){
    this.listTecnico.update(tecnico.$key,{
      nombre   :tecnico.nombre,
      direccion:tecnico.direccion,
      correo   :tecnico.correo,
      telefono :tecnico.telefono
    });   
  }
  // delete
  deletTecnico($key:string){
    this.listTecnico.remove($key);
  }

}
