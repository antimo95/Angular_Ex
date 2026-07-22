import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroNotifiche } from './centro-notifiche';

describe('CentroNotifiche', () => {
  let component: CentroNotifiche;
  let fixture: ComponentFixture<CentroNotifiche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentroNotifiche],
    }).compileComponents();

    fixture = TestBed.createComponent(CentroNotifiche);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
