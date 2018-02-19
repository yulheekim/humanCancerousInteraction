import { TestBed, inject } from '@angular/core/testing';

import { CalendarcolorService } from './calendarcolor.service';

describe('CalendarcolorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarcolorService]
    });
  });

  it('should be created', inject([CalendarcolorService], (service: CalendarcolorService) => {
    expect(service).toBeTruthy();
  }));
});
