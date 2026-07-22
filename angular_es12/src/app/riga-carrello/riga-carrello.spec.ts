import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigaCarrello } from './riga-carrello';

describe('RigaCarrello', () => {
  let component: RigaCarrello;
  let fixture: ComponentFixture<RigaCarrello>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RigaCarrello],
    }).compileComponents();

    fixture = TestBed.createComponent(RigaCarrello);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
