import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { DeliveryComponent } from './delivery.component';

describe('DeliveryComponent', () => {
  let component: DeliveryComponent;
  let fixture: ComponentFixture<DeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryComponent ],
      imports : [AngularFireModule.initializeApp(environment.firebase)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
