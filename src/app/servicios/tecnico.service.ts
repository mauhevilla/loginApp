import { Injectable } from '@angular/core';

import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Tecnico} from '../models/tecnico';
import { Upload } from '../models/upload';

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
  insertTecnico(tecnico :Tecnico,miFile :Upload){
    this.listTecnico.push({
      nombre   :tecnico.nombre,
      direccion:tecnico.direccion,
      correo   :tecnico.correo,
      telefono :tecnico.telefono,
      imagenURL:miFile.url,
      imagenNom:miFile.name      
    });
  }
  // update
  updateTecnico(tecnico :Tecnico,miFile :Upload){
    this.listTecnico.update(tecnico.$key,{
      nombre   :tecnico.nombre,
      direccion:tecnico.direccion,
      correo   :tecnico.correo,
      telefono :tecnico.telefono,
      imagenURL:miFile.url,
      imagenNom:miFile.name
    });   
  }
  // delete
  deletTecnico($key:string){
    this.listTecnico.remove($key);
  }

}
