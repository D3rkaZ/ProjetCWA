import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { ValideComponent } from './valide.component';

describe('ValideComponent', () => {
  let component: ValideComponent;
  let fixture: ComponentFixture<ValideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValideComponent ],
      imports : [AngularFireModule.initializeApp(environment.firebase)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
