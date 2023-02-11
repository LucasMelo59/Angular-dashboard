import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaNotasFicaisComponent } from './tabela-notas-ficais.component';

describe('TabelaNotasFicaisComponent', () => {
  let component: TabelaNotasFicaisComponent;
  let fixture: ComponentFixture<TabelaNotasFicaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaNotasFicaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaNotasFicaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
