import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DesarrolloLaboralComponent} from './desarrollo-laboral.component';

describe('DesarrolloComponent', () => {
  let component: DesarrolloLaboralComponent;
  let fixture: ComponentFixture<DesarrolloLaboralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DesarrolloLaboralComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrolloLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
