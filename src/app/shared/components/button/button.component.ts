import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() externalink: string;
  @Input() route : string;
  @Input() label : string;
  constructor() { }

  ngOnInit(): void {
  }

}
