import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfCustomersComponent } from './number-of-customers.component';

describe('NumberOfCustomersComponent', () => {
  let component: NumberOfCustomersComponent;
  let fixture: ComponentFixture<NumberOfCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberOfCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberOfCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
