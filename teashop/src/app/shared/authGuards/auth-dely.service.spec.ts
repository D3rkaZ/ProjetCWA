import { TestBed } from '@angular/core/testing';

import { AuthDelyService } from './auth-dely.service';

describe('AuthDelyService', () => {
  let service: AuthDelyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthDelyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
