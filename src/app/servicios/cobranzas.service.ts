import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
// importar el modelo de datos
import {Movimientos} from '../models/movimientos' ;

@Injectable()
export class CobranzasService {
 
  moviXtipo: AngularFireList<any>;
  selectedMov : Movimientos = new Movimientos();  
  
  moviTecnicos: AngularFireList<Movimientos>;

  constructor(private db: AngularFireDatabase) {
  }

  getTecnicos(filtro:string) {
    this.moviTecnicos = this.db.list('/movimientos', ref => ref.orderByChild('tecnico').equalTo(filtro));
  }
  getTipoMov(filtro:string) {
    return this.moviXtipo = this.db.list('movimientos',ref => ref.orderByChild('tipo').equalTo(filtro));
    //return this.moviGastos = this.listMov.filter(string[],filtro?) ref => ref.orderByChild('tipo').equalTo(filtro));
  }     
   
  // update
  updateCobranza(movi :Movimientos){
    this.moviXtipo.update(movi.$key,{
      fchfin  :movi.fchfin,
      cobrado :"S"
    });   
  }
// delete
deletMovimiento($key:string){
  this.moviXtipo.remove($key);
}
  
}
