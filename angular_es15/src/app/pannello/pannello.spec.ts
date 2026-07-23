import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pannello } from './pannello';

describe('Pannello', () => {
  let component: Pannello;
  let fixture: ComponentFixture<Pannello>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pannello],
    }).compileComponents();

    fixture = TestBed.createComponent(Pannello);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
