import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiComponent } from './components/ui/ui.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';






@NgModule({
  declarations: [UiComponent, HeaderComponent, NavComponent, FooterComponent],
  exports: [UiComponent,HeaderComponent, NavComponent, FooterComponent],
  imports: [
    CommonModule,FontAwesomeModule,RouterModule
  ]
})
export class UiModule { }
