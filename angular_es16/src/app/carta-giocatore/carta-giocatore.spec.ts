import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaGiocatore } from './carta-giocatore';

describe('CartaGiocatore', () => {
  let component: CartaGiocatore;
  let fixture: ComponentFixture<CartaGiocatore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaGiocatore],
    }).compileComponents();

    fixture = TestBed.createComponent(CartaGiocatore);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', 1);
    fixture.componentRef.setInput('nome', 'Antimo');
    fixture.componentRef.setInput('ruolo', 'Attaccante');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
