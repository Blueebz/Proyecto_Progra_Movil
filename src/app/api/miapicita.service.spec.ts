import { TestBed } from '@angular/core/testing';

import { MiapicitaService } from './miapicita.service';

describe('MiapicitaService', () => {
  let service: MiapicitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiapicitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
