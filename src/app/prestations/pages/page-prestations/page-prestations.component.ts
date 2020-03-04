import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationsService } from 'src/app/shared/services/prestations.service';
import { Observable } from 'rxjs';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
public collection$ :Observable<Prestation[]>;
public states = Object.values(State);
public properties: String[];
  constructor(private ps:PrestationsService) { }
  public changeState(item:Prestation,event){

    console.log(event.target.value);

    this.ps.updateState(item,event.target.value).subscribe((res:Prestation)=>{
      item.state=res.state;
    });
  }
  ngOnInit(): void {
  //  this.ps.collection.subscribe(
  //      (datas)=>{
  //        this.collection=datas;
  //      }
  //  );
  this.collection$=this.ps.collection;
  this.properties = [
    'Type',
    'Client',
    'NbJours',
    'TjmHT',
    'Total HT',
    'Total TTC',
    'State'
  ]
  }

}
