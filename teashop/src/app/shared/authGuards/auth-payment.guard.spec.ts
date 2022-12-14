import { TestBed } from '@angular/core/testing';

import { AuthPaymentGuard } from './auth-payment.guard';

describe('AuthPaymentGuard', () => {
  let guard: AuthPaymentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthPaymentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
