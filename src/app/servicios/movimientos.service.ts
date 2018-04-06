import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
// importar el modelo de datos
import {Movimientos} from '../models/movimientos.service' ;

@Injectable()
export class MovimientosService {

  listMovimientos : AngularFireList<any>;
  selectedMov : Movimientos = new Movimientos();

  constructor(private firebase :AngularFireDatabase) { }

  // metodos propios
  getMovimiento(){
    return this.listMovimientos=this.firebase.list('movimientos');
  }
  //insert
  insertMovimiento(movi :Movimientos){
    this.listMovimientos.push({
      fecha   :movi.fecha,
      descrip :movi.descrip,
      importe :movi.importe,
      tecnico :movi.tecnico,
      tipo    :movi.tipo
    });
  }
  // update
  updateMovimiento(movi :Movimientos){
    this.listMovimientos.update(movi.$key,{
      fecha   :movi.fecha,
      descrip :movi.descrip,
      importe :movi.importe,
      tecnico :movi.tecnico,
      tipo    :movi.tipo
    });   
  }
  // delete
  deletMovimiento($key:string){
    this.listMovimientos.remove($key);
  }


}
