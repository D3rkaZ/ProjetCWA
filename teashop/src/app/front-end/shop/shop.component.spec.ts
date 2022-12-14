import { Router, ActivatedRoute } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthAdminService } from 'src/app/shared/authGuards/auth-admin.service';
import { AngularFirestore, DocumentChangeAction} from '@angular/fire/compat/firestore'
import { PanierService } from 'src/app/shared/service/panier.service';
import { ProduitsService } from 'src/app/shared/service/produits.service';
import { UtilisateurService } from 'src/app/shared/service/utilisateur.service';
import { Observable, of } from 'rxjs';

import { ShopComponent } from './shop.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;
  let fauxUtilisateurService: any;

  beforeEach(async () => {
    fauxUtilisateurService = jasmine.createSpyObj('UtilisateurService', ['getUtilisateurByEmail']);
    (<jasmine.Spy>fauxUtilisateurService.getUtilisateurByEmail).and.callFake(() => Promise.resolve());
    await TestBed.configureTestingModule({
      declarations: [ ShopComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports : [AngularFireModule.initializeApp(environment.firebase), RouterTestingModule],
      providers: [
        {provide: ProduitsService, useClass: ProduitsServiceStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub},
        {provide: Router, useClass: RouterStub},
        {provide: PanierService, useClass: PanierServiceStub},
        {provide: UtilisateurService, useValue: fauxUtilisateurService},
        {provide: AuthAdminService, useClass: AuthAdminServiceStub},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
      expect(component).toBeTruthy();
  });
});
class ProduitsServiceStub{
    getAllProduits(): Observable<DocumentChangeAction<unknown>>{
        return of();
    }
}
class ActivatedRouteStub{}
class RouterStub{}
class PanierServiceStub{}
class AuthAdminServiceStub{}
