import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoreLike } from './contatore-like';

describe('ContatoreLike', () => {
  let component: ContatoreLike;
  let fixture: ComponentFixture<ContatoreLike>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoreLike],
    }).compileComponents();

    fixture = TestBed.createComponent(ContatoreLike);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
