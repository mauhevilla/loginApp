import { Component, OnInit } from '@angular/core';
// traer la clase o modelo 
import{ Tecnico} from '../../../models/tecnico.service';
// traer el servicio
import { TecnicoService} from '..//../../servicios/tecnico.service' ;
// impor toaster para memsajes
//import { ToastrService} from 'ngx-toastr';

// impor ngForm
import { NgForm} from '@angular/forms';

@Component({
  selector: 'crud-tecnico',
  templateUrl: './crud-tecnico.component.html',
  styleUrls: ['./crud-tecnico.component.scss']
})
export class CrudTecnicoComponent implements OnInit {
  listTecnico : Tecnico[];

  constructor(private tecnicoService : TecnicoService) { }

  ngOnInit() {
    this.tecnicoService.getTecnicos();
    this.resetForm();
    return this.tecnicoService.getTecnicos()
    .snapshotChanges()
    .subscribe(item => {
      this.listTecnico=[];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"]=element.key;
        this.listTecnico.push(x as Tecnico);
      });
    });
   
    //
  }

  onSubmit (tecnicoForm : NgForm){
    if(tecnicoForm.value.$key == null){
      this.tecnicoService.insertTecnico(tecnicoForm.value)  ;
    //  this.toast.success('Operacion Agregar','Producto Grabado');
    }     
    else{
      this.tecnicoService.updateTecnico(tecnicoForm.value);
    //  this.toast.success('Operacion Modificar','Producto Actualizado');
    }  
    this.resetForm(tecnicoForm);
  }

  resetForm(tecnicoForm ?: NgForm){
  if(tecnicoForm != null)
  tecnicoForm.reset();
  this.tecnicoService.selectedTecnico=new Tecnico();
  }


  onEdit(tecnico : Tecnico){
    this.tecnicoService.selectedTecnico = Object.assign({},tecnico) ;
  }

  onDelete($key:string){
    if(confirm('Esta seguro de querer Eliminarlo ?')){
      this.tecnicoService.deletTecnico($key);
     // this.toast.success('Successfull Operation','Producto Elimnado ...');
  }
   
  
  
  }

}
