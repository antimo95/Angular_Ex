import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoLibri } from './catalogo-libri';

describe('CatalogoLibri', () => {
  let component: CatalogoLibri;
  let fixture: ComponentFixture<CatalogoLibri>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoLibri],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogoLibri);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
