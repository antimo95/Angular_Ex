import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaProdotto } from './carta-prodotto';

describe('CartaProdotto', () => {
  let component: CartaProdotto;
  let fixture: ComponentFixture<CartaProdotto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaProdotto],
    }).compileComponents();

    fixture = TestBed.createComponent(CartaProdotto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
