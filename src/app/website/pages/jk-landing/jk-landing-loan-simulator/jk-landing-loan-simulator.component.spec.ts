import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JkLandingLoanSimulatorComponent } from './jk-landing-loan-simulator.component';

describe('JkLandingLoanSimulatorComponent', () => {
  let component: JkLandingLoanSimulatorComponent;
  let fixture: ComponentFixture<JkLandingLoanSimulatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JkLandingLoanSimulatorComponent]
    });
    fixture = TestBed.createComponent(JkLandingLoanSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
