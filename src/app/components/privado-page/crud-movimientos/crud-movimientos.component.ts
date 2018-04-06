import { Component, OnInit } from '@angular/core';

// traer la clase o modelo 
import{Movimientos } from '../../../models/movimientos.service';
// traer el servicio
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

  constructor(private movimientosService :  MovimientosService,
              private toast : ToastrService) { }

  ngOnInit() {
  }

}
