import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNotaFiscalComponent } from './form-nota-fiscal.component';

describe('FormNotaFiscalComponent', () => {
  let component: FormNotaFiscalComponent;
  let fixture: ComponentFixture<FormNotaFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNotaFiscalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNotaFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
