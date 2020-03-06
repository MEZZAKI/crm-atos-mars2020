import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {
  public states =Object.values(State);
  @Output() ntems :EventEmitter<Prestation>=new EventEmitter();
  @Input() item = new Prestation();
  public form: FormGroup;
 
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form =this.fb.group({
    //  id: number;
      typePresta: [this.item.typePresta,Validators.required],
      client: [this.item.client,Validators.compose([Validators.required ,Validators.minLength(2)])],
      tjmHt: [this.item.tjmHt],
      nbJours: [this.item.nbJours],
      tva: [this.item.tva],
      state :[this.item.state],
      comment:[this.item.comment]
    });
  }
  public onSubmit(){
    console.log(this.form.value);
    this.ntems.emit(this.form.value);
  }



}
