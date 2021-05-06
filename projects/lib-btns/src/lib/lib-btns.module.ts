import { NgModule } from '@angular/core';
import { LibBtnsComponent } from './lib-btns.component';
import { BtnSuccessComponent } from './components/btn-success/btn-success.component';
import { BtnDangerComponent } from './components/btn-danger/btn-danger.component';



@NgModule({
  declarations: [
    LibBtnsComponent,
    BtnSuccessComponent,
    BtnDangerComponent
  ],
  imports: [
  ],
  exports: [
    LibBtnsComponent,
    BtnSuccessComponent,
    BtnDangerComponent
  ]
})
export class LibBtnsModule { }
