import { TestBed } from '@angular/core/testing';

import { AuthValideGuard } from './auth-valide.guard';

describe('AuthValideGuard', () => {
  let guard: AuthValideGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthValideGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
