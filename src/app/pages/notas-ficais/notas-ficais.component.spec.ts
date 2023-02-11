import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasFicaisComponent } from './notas-ficais.component';

describe('NotasFicaisComponent', () => {
  let component: NotasFicaisComponent;
  let fixture: ComponentFixture<NotasFicaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasFicaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotasFicaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
