import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AsuntosEstudiantilesComponent} from './asuntos-estudiantiles.component';

describe('AsuntosEstudiantilesComponent', () => {
  let component: AsuntosEstudiantilesComponent;
  let fixture: ComponentFixture<AsuntosEstudiantilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsuntosEstudiantilesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsuntosEstudiantilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
