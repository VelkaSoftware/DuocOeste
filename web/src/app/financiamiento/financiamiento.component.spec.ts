import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanciamientoComponent } from './financiamiento.component';

describe('FinanciamientoComponent', () => {
  let component: FinanciamientoComponent;
  let fixture: ComponentFixture<FinanciamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanciamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanciamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
