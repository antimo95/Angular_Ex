import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteprimaProfilo } from './anteprima-profilo';

describe('AnteprimaProfilo', () => {
  let component: AnteprimaProfilo;
  let fixture: ComponentFixture<AnteprimaProfilo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnteprimaProfilo],
    }).compileComponents();

    fixture = TestBed.createComponent(AnteprimaProfilo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
