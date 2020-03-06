import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationsService } from 'src/app/shared/services/prestations.service';
import { Observable } from 'rxjs';
import { State } from 'src/app/shared/enums/state.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
public collection$ :Observable<Prestation[]>;
public states = Object.values(State);
public propertiesPresta: String[];
public title :string;
public subTitle:string;
public label:string;
public route:string;
public externalLink:string;

  constructor(private ps:PrestationsService,public acRoute:ActivatedRoute)
  {

   }
  public changeState(item:Prestation,event){

    console.log(event.target.value);

    this.ps.updateState(item,event.target.value).subscribe((res:Prestation)=>{
      item.state=res.state;
    });
  }
  ngOnInit(): void {
  this.acRoute.data.subscribe(
      (datas)=>{
        this.title=datas.title;
        this.subTitle=datas.subTitle;
    }
  );
 // this.title="Prestations";
 // this.subTitle="Tous les prestations";
  this.label="Ajouter une prestation";
  this.route="add";
  this.externalLink="https//www.google.fr";
  this.collection$=this.ps.collection;
  this.propertiesPresta = [
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
