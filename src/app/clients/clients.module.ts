import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { PageClientsComponentComponent } from './pages/page-clients-component/page-clients-component.component';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';



@NgModule({
  declarations: [ PageClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
