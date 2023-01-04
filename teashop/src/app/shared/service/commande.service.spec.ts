import { TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { CommandeService } from './commande.service';

describe('CommandeService', () => {
  let service: CommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [AngularFireModule.initializeApp(environment.firebase)]
    });
    service = TestBed.inject(CommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
