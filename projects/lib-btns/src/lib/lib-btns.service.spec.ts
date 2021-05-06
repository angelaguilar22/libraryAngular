import { TestBed } from '@angular/core/testing';

import { LibBtnsService } from './lib-btns.service';

describe('LibBtnsService', () => {
  let service: LibBtnsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibBtnsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
