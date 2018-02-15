import { TestBed, inject } from '@angular/core/testing';

import { MilestoneService } from './milestone-store.service';

describe('MilestoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MilestoneService]
    });
  });

  it('should be created', inject([MilestoneService], (service: MilestoneService) => {
    expect(service).toBeTruthy();
  }));
});
