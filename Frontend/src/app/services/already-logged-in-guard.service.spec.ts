import { TestBed } from '@angular/core/testing';

import { AlreadyLoggedInGuardService } from './already-logged-in-guard.service';

describe('AlreadyLoggedInGuardService', () => {
  let service: AlreadyLoggedInGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlreadyLoggedInGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
