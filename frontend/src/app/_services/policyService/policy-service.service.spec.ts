import { TestBed } from '@angular/core/testing';

import { PolicyServiceService } from './policy-service.service';

describe('PolicyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PolicyServiceService = TestBed.get(PolicyServiceService);
    expect(service).toBeTruthy();
  });
});
