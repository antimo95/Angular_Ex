import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitoloDinamico } from './titolo-dinamico';

describe('TitoloDinamico', () => {
  let component: TitoloDinamico;
  let fixture: ComponentFixture<TitoloDinamico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitoloDinamico],
    }).compileComponents();

    fixture = TestBed.createComponent(TitoloDinamico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
