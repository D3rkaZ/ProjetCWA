import { TestBed } from '@angular/core/testing';

import { AuthValideService } from './auth-valide.service';

describe('AuthValideService', () => {
  let service: AuthValideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthValideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
