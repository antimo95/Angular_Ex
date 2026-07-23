import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiepilogoCarrello } from './riepilogo-carrello';

describe('RiepilogoCarrello', () => {
  let component: RiepilogoCarrello;
  let fixture: ComponentFixture<RiepilogoCarrello>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiepilogoCarrello],
    }).compileComponents();

    fixture = TestBed.createComponent(RiepilogoCarrello);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
