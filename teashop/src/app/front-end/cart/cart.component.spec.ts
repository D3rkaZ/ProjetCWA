import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports : [AngularFireModule.initializeApp(environment.firebase)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
