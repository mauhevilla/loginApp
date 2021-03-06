import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

// traer la clase o modelo 
import{Movimientos } from '../../../models/movimientos';
import {CobranzasService} from '../../../servicios/cobranzas.service';

import { ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-cob-ingresos',
  templateUrl: './cob-ingresos.component.html',
  styleUrls: ['./cob-ingresos.component.scss']
})
export class CobIngresosComponent implements OnInit {

  listMovimientos: Movimientos[];
  constructor(private servicioCobranza: CobranzasService,
              private toast : ToastrService) { }

  ngOnInit() {
    //this.servicioCobranza.getTipoMov('Gastos')  ;      
    this.resetForm();
    return this.servicioCobranza.getTipoMov('Ingresos')
      .snapshotChanges()
      .subscribe(item => {
        this.listMovimientos = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.listMovimientos.push(x as Movimientos);
        });
      });
  }
  resetForm(movimientosForm?: NgForm) {
    if (movimientosForm != null)
      movimientosForm.reset();
    this.servicioCobranza.selectedMov = new Movimientos();
  }

  onSubmit(movimientosForm :NgForm)
    {
    
      this.servicioCobranza.updateCobranza(movimientosForm.value);
      this.toast.success('Operacion Actualizar Pago','Movimiento Actualizado');
        
      this.resetForm(movimientosForm);
    }
  
    



  onPagar(movimiento : Movimientos){
    this.servicioCobranza.selectedMov = Object.assign({},movimiento) ;
    }
  

}
