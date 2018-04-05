import { Component, OnInit } from '@angular/core';
// traer la clase o modelo 
import{ Tecnico} from '../../../models/tecnico.service';
// traer el servicio
import { TecnicoService} from '..//../../servicios/tecnico.service' ;
// impor toaster para memsajes
//import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'crud-tecnico',
  templateUrl: './crud-tecnico.component.html',
  styleUrls: ['./crud-tecnico.component.scss']
})
export class CrudTecnicoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
