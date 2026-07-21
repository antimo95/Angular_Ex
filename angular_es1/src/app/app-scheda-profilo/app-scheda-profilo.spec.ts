import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSchedaProfilo } from './app-scheda-profilo';

describe('AppSchedaProfilo', () => {
  let component: AppSchedaProfilo;
  let fixture: ComponentFixture<AppSchedaProfilo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSchedaProfilo],
    }).compileComponents();

    fixture = TestBed.createComponent(AppSchedaProfilo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
