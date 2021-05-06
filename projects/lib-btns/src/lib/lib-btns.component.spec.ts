import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibBtnsComponent } from './lib-btns.component';

describe('LibBtnsComponent', () => {
  let component: LibBtnsComponent;
  let fixture: ComponentFixture<LibBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibBtnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
