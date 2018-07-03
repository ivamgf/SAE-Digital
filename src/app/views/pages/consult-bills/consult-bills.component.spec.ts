import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultBillsComponent } from './consult-bills.component';

describe('ConsultBillsComponent', () => {
  let component: ConsultBillsComponent;
  let fixture: ComponentFixture<ConsultBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
