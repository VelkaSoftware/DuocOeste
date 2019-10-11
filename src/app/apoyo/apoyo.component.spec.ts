import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoyoComponent } from './apoyo.component';

describe('ApoyoComponent', () => {
  let component: ApoyoComponent;
  let fixture: ComponentFixture<ApoyoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoyoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
