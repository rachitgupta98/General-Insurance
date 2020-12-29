import { TestBed } from '@angular/core/testing';

import { SampeService } from './sampe.service';

describe('SampeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampeService = TestBed.get(SampeService);
    expect(service).toBeTruthy();
  });
});
