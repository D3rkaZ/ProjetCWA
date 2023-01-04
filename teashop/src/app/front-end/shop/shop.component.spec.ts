import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { RouterTestingModule } from '@angular/router/testing';

import { ShopComponent } from './shop.component';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopComponent ],
      imports : [AngularFireModule.initializeApp(environment.firebase), RouterTestingModule]
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
