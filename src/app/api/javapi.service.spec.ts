import { TestBed } from '@angular/core/testing';

import { JavapiService } from './javapi.service';

describe('JavapiService', () => {
  let service: JavapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
