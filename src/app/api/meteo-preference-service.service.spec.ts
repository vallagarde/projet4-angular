import { TestBed } from '@angular/core/testing';

import { MeteoPreferenceServiceService } from './meteo-preference-service.service';

describe('MeteoPreferenceServiceService', () => {
  let service: MeteoPreferenceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeteoPreferenceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
