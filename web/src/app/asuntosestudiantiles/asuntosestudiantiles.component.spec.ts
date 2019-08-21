import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsuntosestudiantilesComponent } from './asuntosestudiantiles.component';

describe('AsuntosestudiantilesComponent', () => {
  let component: AsuntosestudiantilesComponent;
  let fixture: ComponentFixture<AsuntosestudiantilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsuntosestudiantilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsuntosestudiantilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
