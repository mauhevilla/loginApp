export class Movimientos {
  $key :string ;
  fecha:string;
  descrip:string;
  tipo :string;
  importe:number;
  tecnico:string;
  fchfin :string;
  cobrado:string;
  pagos :[{fechaP:string,monto :number}]
  constructor(){
    this.fchfin="";
    this.cobrado="N";
  }

}
