import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationsService } from 'src/app/shared/services/prestations.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
public collection$ :Observable<Prestation[]>;

public properties: String[];
  constructor(private ps:PrestationsService) { }

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
