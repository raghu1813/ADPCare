/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HealthUpdationService } from './health-updation.service';

describe('Service: HealthUpdation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HealthUpdationService]
    });
  });

  it('should ...', inject([HealthUpdationService], (service: HealthUpdationService) => {
    expect(service).toBeTruthy();
  }));
});
