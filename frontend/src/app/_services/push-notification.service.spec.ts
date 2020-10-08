/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PushNotificationService } from './push-notification.service';

describe('Service: PushNotification', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PushNotificationService]
    });
  });

  it('should ...', inject([PushNotificationService], (service: PushNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
