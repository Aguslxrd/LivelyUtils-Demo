import { TestBed } from '@angular/core/testing';

import { BackendapiService } from './backendapi.service';

describe('BackendapiService', () => {
  let service: BackendapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
