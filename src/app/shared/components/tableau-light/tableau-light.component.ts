import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tableau-light',
  templateUrl: './tableau-light.component.html',
  styleUrls: ['./tableau-light.component.scss'],
  encapsulation: ViewEncapsulation.None // pour rendre le css .. global !
})
export class TableauLightComponent implements OnInit {
  @Input() properties :string[];
  constructor() { }

  ngOnInit(): void {
  }

}
