import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettoreMusica } from './lettore-musica';

describe('LettoreMusica', () => {
  let component: LettoreMusica;
  let fixture: ComponentFixture<LettoreMusica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LettoreMusica],
    }).compileComponents();

    fixture = TestBed.createComponent(LettoreMusica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
