import { TestBed } from '@angular/core/testing';

import { ConstumerService } from './customer.service';

describe('ConstumerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConstumerService = TestBed.get(ConstumerService);
    expect(service).toBeTruthy();
  });
});
