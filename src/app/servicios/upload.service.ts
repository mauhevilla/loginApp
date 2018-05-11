import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import * as firebase from 'firebase';

//la clase
//import {Upload} from './upload';
import { Upload } from '../models/upload';


@Injectable()
export class UploadService {
  // variables de datos
  listTecnico : AngularFireList<any>;
  
  //variables de imagen
  private basePath: string = '/uploads';
  uploads: AngularFirestoreCollection<Upload[]>;

  constructor(private af: AngularFirestore,
              private firebase :AngularFireDatabase) { }

  // mis metodos de imagen
  pushUpload(upload: Upload) { 

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
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        //grabar los datos
        
      }
    );
  }

  deleteUpload(upload: Upload) {  
    this.deleteFileStorage(upload.name);  
  }
// Firebase files must have unique names in their respective storage dir
// So the name serves as a unique key
  private deleteFileStorage(name:string) {
       let storageRef = firebase.storage().ref();
       storageRef.child(`${this.basePath}/${name}`).delete()
  } 

}
