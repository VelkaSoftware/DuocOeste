import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastoralComponent } from './pastoral.component';

describe('PastoralComponent', () => {
  let component: PastoralComponent;
  let fixture: ComponentFixture<PastoralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastoralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
