import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-btn-success',
  templateUrl: './btn-success.component.html',
  styleUrls: ['./btn-success.component.css']
})
export class BtnSuccessComponent implements OnInit {

  // Variables de entrada componente
  @Input() text: string = 'default';
  
  constructor() { }

  ngOnInit(): void {
  }

}
