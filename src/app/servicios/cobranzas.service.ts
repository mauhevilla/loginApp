import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList,AngularFireAction } from 'angularfire2/database';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// importar el modelo de datos
import {Movimientos} from '../models/movimientos' ;
import { FirebaseApp } from 'angularfire2';


@Injectable()
export class CobranzasService {

  listMov :  Observable<any[]>;
  //listMovimientos : AngularFireList<any>;
  tipo$: BehaviorSubject<string|null>;
  selectedMov : Movimientos = new Movimientos();  

  moviGastos: AngularFireList<Movimientos>;
  moviTecnicos: AngularFireList<Movimientos>;

  constructor(private db: AngularFireDatabase) {
   // this.listMovimientos=this.db.list('movimientos');
  }
  getFilterBy(tipo: string|null) {
    this.tipo$.next(tipo);
  }
  getMovimientos(){
    return this.listMov;
  }

  getTecnicos(filtro:string) {
    this.moviTecnicos = this.db.list('/movimientos', ref => ref.orderByChild('tecnico').equalTo(filtro));
  }
  getTipoMov(filtro:string) {
    return this.moviGastos = this.db.list('movimientos',ref => ref.orderByChild('tipo').equalTo('Gastos'));
    //return this.moviGastos = this.listMov.filter(string[],filtro?) ref => ref.orderByChild('tipo').equalTo(filtro));
  }     
   

  
}
