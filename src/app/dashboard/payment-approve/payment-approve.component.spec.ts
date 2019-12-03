import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentApproveComponent } from './payment-approve.component';

describe('PaymentApproveComponent', () => {
  let component: PaymentApproveComponent;
  let fixture: ComponentFixture<PaymentApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
