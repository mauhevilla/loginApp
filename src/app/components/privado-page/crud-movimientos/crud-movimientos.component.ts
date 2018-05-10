import { Component, OnInit } from '@angular/core';

// traer la clase o modelo 
import{Movimientos } from '../../../models/movimientos';
import{ Tecnico} from '../../../models/tecnico';

// traer los servicios  necesarios
import { TecnicoService} from '..//../../servicios/tecnico.service' ;
import { MovimientosService} from '..//../../servicios/movimientos.service' ;

// impor toaster para memsajes
import { ToastrService} from 'ngx-toastr';
// impor ngForm
import { NgForm} from '@angular/forms';

@Component({
  selector: 'crud-movimientos',
  templateUrl: './crud-movimientos.component.html',
  styleUrls: ['./crud-movimientos.component.scss']
})
export class CrudMovimientosComponent implements OnInit {

  listTecnicos : Tecnico[];
  listMovimientos : Movimientos[];

  constructor(private movimientosService :  MovimientosService,
              private tecnicoServis:TecnicoService,
              private toast : ToastrService) { }

  ngOnInit() {    
    this.movimientosService.getMovimiento();
    this.resetForm();
    this. getTecnicos();
    return this.movimientosService.getMovimiento()
    .snapshotChanges()
    .subscribe(item => {
      this.listMovimientos=[];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"]=element.key;
        this.listMovimientos.push(x as Movimientos);
      });
    });  
  } 
  // metodos propiios
  getTecnicos(){
    return this.tecnicoServis.getTecnicos()
    .snapshotChanges()
    .subscribe(item => {
      this.listTecnicos=[];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"]=element.key;
        this.listTecnicos.push(x as Tecnico);
      });
    });
  }
  onSubmit(movimientosForm :NgForm)
    {
    if(movimientosForm.value.$key == null){
      this.movimientosService.insertMovimiento(movimientosForm.value)  ;
      this.toast.success('Operacion Agregar','Movimiento Grabado');
    }     
    else{
      this.movimientosService.updateMovimiento(movimientosForm.value);
      this.toast.success('Operacion Modificar','Movimiento Actualizado');
      }  
      this.resetForm(movimientosForm);
    }
  
    resetForm(movimientosForm ?: NgForm)
    {
      if(movimientosForm != null)
      movimientosForm.reset();
      this.movimientosService.selectedMov=new Movimientos();
    }
  
    

    onEditMov(movimiento : Movimientos){
    this.movimientosService.selectedMov = Object.assign({},movimiento) ;
    }

    onDeleteMov($key:string){
    if(confirm('Esta seguro de querer Eliminarlo ?')){
      this.movimientosService.deletMovimiento($key);
      this.toast.success('Successfull Operation','Movimiento Elimnado ...');
    }
  } 

}
