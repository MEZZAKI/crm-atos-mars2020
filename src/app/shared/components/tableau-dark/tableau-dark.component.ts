import { Component, OnInit, Input ,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tableau-dark',
  templateUrl: './tableau-dark.component.html',
  styleUrls: ['./tableau-dark.component.scss'],
  encapsulation: ViewEncapsulation.None // pour rendre le css .. global !
})
export class TableauDarkComponent implements OnInit {
  @Input() properties :string[];
  constructor() { }

  ngOnInit(): void {
  }

}
