import { TestBed } from '@angular/core/testing';

import { ClaimPolicyService } from './claim-policy.service';

describe('ClaimPolicyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClaimPolicyService = TestBed.get(ClaimPolicyService);
    expect(service).toBeTruthy();
  });
});
