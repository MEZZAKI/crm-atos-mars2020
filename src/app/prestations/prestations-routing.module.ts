import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { AddPrestationComponent } from './pages/add-prestation/add-prestation.component';


const appRoutes: Routes = [

  {
    path: '',
    component: PagePrestationsComponent,
    data: { title: 'Prestations', subTitle: 'Toutes les prestations' }
  },
  {
    path: 'add',
    component: AddPrestationComponent,
    data: { title: 'Prestations', subTitle: 'Ajouter une prestation' }
  },

];
@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class PrestationsRoutingModule { }
