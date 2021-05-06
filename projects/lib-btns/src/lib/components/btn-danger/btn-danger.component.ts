import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-btn-danger',
  templateUrl: './btn-danger.component.html',
  styleUrls: ['./btn-danger.component.css']
})
export class BtnDangerComponent implements OnInit {

  // Variables de entrada componente
  @Input() text: string = 'default';

  constructor() { }

  ngOnInit(): void {
  }

}
