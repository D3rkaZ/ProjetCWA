import { TestBed } from '@angular/core/testing';

import { AuthPaymentService } from './auth-payment.service';

describe('AuthPaymentService', () => {
  let service: AuthPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
