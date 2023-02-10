import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersByTypeTaxationComponent } from './customers-by-type-taxation.component';

describe('CustomersByTypeTaxationComponent', () => {
  let component: CustomersByTypeTaxationComponent;
  let fixture: ComponentFixture<CustomersByTypeTaxationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersByTypeTaxationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersByTypeTaxationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
