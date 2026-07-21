import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cruscotto } from './cruscotto';

describe('Cruscotto', () => {
  let component: Cruscotto;
  let fixture: ComponentFixture<Cruscotto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cruscotto],
    }).compileComponents();

    fixture = TestBed.createComponent(Cruscotto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
