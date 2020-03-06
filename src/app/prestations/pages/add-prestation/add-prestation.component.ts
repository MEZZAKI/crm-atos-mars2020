import { Component, OnInit } from '@angular/core';
import { PrestationsService } from 'src/app/shared/services/prestations.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  constructor(private ps:PrestationsService,private router:Router,private acRoute :ActivatedRoute) { }


  public  title :any;
  public  subTitle :any;
  ngOnInit(): void {
       this.acRoute.data.subscribe(
         (datas)=>{
           this.title=datas.title;
           this.subTitle=datas.subTitle;
       }
     );
  }
  public addItem(item:any){
    console.log("recieved");
    console.log(item);
    this.ps.add(item).subscribe((res)=>{
  //this.router.navigate(['prestations']);
      this.router.navigate(['../'],{relativeTo:this.acRoute});

    });
  }

}
