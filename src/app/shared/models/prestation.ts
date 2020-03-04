import { PrestationI } from '../interfaces/prestation-i';

export class Prestation implements PrestationI {
  id: number;  typePresta: string;
  client: string;
  tjmHt: number;
  nbJours: number;
  tva: number;
  state: import("../enums/state.enum").State;
  comment: string;
  constructor(obj?: Partial<Prestation>){
    if(obj){
      Object.assign(this,obj);
    }
  }
  totalHt(): number {
   return this.tjmHt * this.nbJours;
  }
  totalTtc(): number {
    if(this.tva<=0){
      return this.totalHt();
    }
    return this.totalHt()*(1+this.tva/100);
  }

}
