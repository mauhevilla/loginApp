import { Component, OnInit } from '@angular/core';
// traer la clase o modelo 
import{ Tecnico} from '../../../models/tecnico';
import {Upload } from '../../../models/upload';
import * as _ from "lodash";
// impor toaster para memsajes
import { ToastrService} from 'ngx-toastr';
// impor ngForm
import { NgForm} from '@angular/forms';
// traigo firestore
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
// traer el servicio
import { TecnicoService} from '..//../../servicios/tecnico.service' ;
import { UploadService } from '..//../../servicios/upload.service'

@Component({
  selector: 'crud-tecnico',
  templateUrl: './crud-tecnico.component.html',
  styleUrls: ['./crud-tecnico.component.scss']
})
export class CrudTecnicoComponent implements OnInit {
    
  listTecnico : Tecnico[];
  //var para subir archivo
  items: Observable<any[]>;
  selectedFiles: FileList;  
  currentUpload: Upload;
   
  constructor(private tecnicoService : TecnicoService,
               private uploadService : UploadService,
               private toast : ToastrService
              
            ) { }

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
  }
  
  onSubmit (tecnicoForm : NgForm){
    if(tecnicoForm.value.$key == null){     
      this.uploadSingle();
      if(this.currentUpload.progress=100){
        this.tecnicoService.insertTecnico(tecnicoForm.value, this.currentUpload)  ;
        this.toast.success('Operacion Agregar','Producto Grabado');
      }
      
    }     
    else{
      this.tecnicoService.updateTecnico(tecnicoForm.value,this.currentUpload);
      this.toast.success('Operacion Modificar','Producto Actualizado');
    }  
    this.resetForm(tecnicoForm);
  }
// funciones de imagen 
    // mis metodos
    detectFiles(event) {
      this.selectedFiles = event.target.files;
      }
      uploadSingle() {
        let file = this.selectedFiles.item(0)
        this.currentUpload = new Upload(file);
        this.uploadService.pushUpload(this.currentUpload)
      }
    // fin funciones de imagen
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
      this.uploadService.deleteUpload(this.currentUpload);
      this.tecnicoService.deletTecnico($key);
      this.toast.success('Successfull Operation','Producto Elimnado ...');
  }
   
  
  
  }

}
