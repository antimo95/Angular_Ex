import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigliettoVisita } from './biglietto-visita';

describe('BigliettoVisita', () => {
  let component: BigliettoVisita;
  let fixture: ComponentFixture<BigliettoVisita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigliettoVisita],
    }).compileComponents();

    fixture = TestBed.createComponent(BigliettoVisita);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
