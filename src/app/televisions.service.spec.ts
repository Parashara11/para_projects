import { TestBed } from '@angular/core/testing';

import { TelevisionsService } from './televisions.service';

describe('TelevisionsService', () => {
  let service: TelevisionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelevisionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
