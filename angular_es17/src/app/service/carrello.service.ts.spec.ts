import { TestBed } from '@angular/core/testing';

import { CarrelloServiceTs } from './carrello.service.ts';

describe('CarrelloServiceTs', () => {
  let service: CarrelloServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrelloServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
