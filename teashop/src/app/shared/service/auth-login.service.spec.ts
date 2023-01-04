import { TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { AuthLoginService } from './auth-login.service';

describe('AuthLoginService', () => {
  let service: AuthLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [AngularFireModule.initializeApp(environment.firebase)]
    });
    service = TestBed.inject(AuthLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
