import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Tecnico} from '../models/tecnico';
import { Upload } from '../models/upload';

@Injectable()
export class TecnicoService {

  listTecnico : AngularFireList<any>;
  selectedTecnico : Tecnico = new Tecnico();
  
  //subida de archivo
  private basePath: string = '/uploads';

  constructor(private firebase :AngularFireDatabase,
              private af: AngularFirestore) { }

 
  /////////////////////////////////////////////////////////////////////////////////
  // mis metodos generales
  pushUpload(upload: Upload,tecnico :Tecnico) { 
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);    
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        //upload in progress
        upload.progress = Math.round((uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100);
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success        
        tecnico.imagenURL=uploadTask.snapshot.downloadURL;
        tecnico.imagenNom= upload.file.name;
        //grabar los datos 
        console.log(upload);   
        //this.insertTecnico(tecnico )   
        this.listTecnico.push({
          nombre   :tecnico.nombre,
          direccion:tecnico.direccion,
          correo   :tecnico.correo,
          telefono :tecnico.telefono,
          imagenURL:tecnico.imagenURL,
          imagenNom:tecnico.imagenNom  
        });
        upload.progress =0;
      }
    );
  }


// Firebase files must have unique names in their respective storage dir
// So the name serves as a unique key
   deleteFileStorage(name:string) {
       let storageRef = firebase.storage().ref();
       storageRef.child(`${this.basePath}/${name}`).delete();
  } 
   // metodos db tecnico
   getTecnicos(){
    return this.listTecnico=this.firebase.list('tecnico');
  }
  //insert db tecnico
  private insertTecnico(tecnico :Tecnico){
    this.listTecnico.push({
      nombre   :tecnico.nombre,
      direccion:tecnico.direccion,
      correo   :tecnico.correo,
      telefono :tecnico.telefono,
      imagenURL:tecnico.imagenURL,
      imagenNom:tecnico.imagenNom  
    });
  }
  // update db tecnico
  updateDBTecnico(tecnico :Tecnico){    
    this.listTecnico.update(tecnico.$key,{
      nombre   :tecnico.nombre,
      direccion:tecnico.direccion,
      correo   :tecnico.correo,
      telefono :tecnico.telefono,
      imagenURL:tecnico.imagenURL,
      imagenNom: tecnico.imagenNom
    });   
  }
  // delete db tecnico
  deletDBTecnico($key :string){
       this.listTecnico.remove($key);    
  }
}
