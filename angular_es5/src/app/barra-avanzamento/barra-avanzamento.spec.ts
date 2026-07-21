import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraAvanzamento } from './barra-avanzamento';

describe('BarraAvanzamento', () => {
  let component: BarraAvanzamento;
  let fixture: ComponentFixture<BarraAvanzamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraAvanzamento],
    }).compileComponents();

    fixture = TestBed.createComponent(BarraAvanzamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
