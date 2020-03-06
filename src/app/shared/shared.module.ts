import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TemplateAComponent } from './templates/template-a/template-a.component';
import { TemplateBComponent } from './templates/template-b/template-b.component';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({

declarations: [TotalPipe, StateDirective, TableauLightComponent, TableauDarkComponent, TemplateAComponent, TemplateBComponent, ButtonComponent,ButtonComponent],
  exports:[TotalPipe, StateDirective, TableauLightComponent, TableauDarkComponent, TemplateAComponent, TemplateBComponent, ButtonComponent,ReactiveFormsModule,FontAwesomeModule],
  imports: [
   CommonModule,
   //TemplatesModule,
   RouterModule,
   ReactiveFormsModule,
   FontAwesomeModule

  ]
})
export class SharedModule { }
