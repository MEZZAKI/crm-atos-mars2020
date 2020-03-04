import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prestation } from '../models/prestation';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import { State } from '../enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

private pCollection$: Observable< Prestation[]>;
  constructor(private http: HttpClient) {
    this.collection= this.http.get< Prestation[]>(` ${environment.urlApi}prestations`).pipe(

      map((tab)=>{
      return tab.map((objJson)=>{
        return new Prestation(objJson);
      })
      })
    );
  }

  // get collection
  public get collection(): Observable< Prestation[]>{
    return this.pCollection$;
  }
  // set collection
  public set collection(col: Observable< Prestation[]>){
    this.pCollection$ =col;
  }

  //add item in collection

  // update item in collection
  updateState(item: Prestation, state: State) {
    let obj =new Prestation(item);
    obj.state=state;
    return this.update(obj);
  }
  public update(item: Prestation) {
    return this.http.patch(` ${environment.urlApi}prestations/${item.id}`,item);
  }
  //delete item in collection

  // get item by id from collection
}
