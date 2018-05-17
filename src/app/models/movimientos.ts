export class Movimientos {
  $key :string ;
  fecha:string;
  descrip:string;
  tipo :string;
  importe:number;
  tecnico:string;
  fchfin :string;
  cobrado:string;
  pagos :[{fecha:string,importe :number}]
  constructor(){
    this.fchfin="";
    this.cobrado="N";
  }

}
