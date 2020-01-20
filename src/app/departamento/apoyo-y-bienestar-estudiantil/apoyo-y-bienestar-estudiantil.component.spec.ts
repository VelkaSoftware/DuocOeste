import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ApoyoYBienestarEstudiantilComponent} from './apoyo-y-bienestar-estudiantil.component';

describe('ApoyoComponent', () => {
  let component: ApoyoYBienestarEstudiantilComponent;
  let fixture: ComponentFixture<ApoyoYBienestarEstudiantilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApoyoYBienestarEstudiantilComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoyoYBienestarEstudiantilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
