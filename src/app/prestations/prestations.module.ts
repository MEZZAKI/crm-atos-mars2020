import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { PagesPrestationsComponentComponent } from './pages/pages-prestations-component/pages-prestations-component.component';
//import { PrestationsComponent } from './pages/prestations/prestations.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ PagePrestationsComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule
  ]
})
export class PrestationsModule { }
