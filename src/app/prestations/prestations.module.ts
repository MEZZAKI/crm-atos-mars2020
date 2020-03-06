import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { PagesPrestationsComponentComponent } from './pages/pages-prestations-component/pages-prestations-component.component';
//import { PrestationsComponent } from './pages/prestations/prestations.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddPrestationComponent } from './pages/add-prestation/add-prestation.component';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';



@NgModule({
  declarations: [ PagePrestationsComponent, AddPrestationComponent, FormPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule
  ],
  exports: [AddPrestationComponent]
})
export class PrestationsModule { }
