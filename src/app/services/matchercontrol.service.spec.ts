import { TestBed, inject } from '@angular/core/testing';

import { MatchercontrolService } from './matchercontrol.service';

describe('MatchercontrolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchercontrolService]
    });
  });

  it('should be created', inject([MatchercontrolService], (service: MatchercontrolService) => {
    expect(service).toBeTruthy();
  }));
});
