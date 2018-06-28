import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmchairsComponent } from './armchairs.component';

describe('ArmchairsComponent', () => {
  let component: ArmchairsComponent;
  let fixture: ComponentFixture<ArmchairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmchairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmchairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
