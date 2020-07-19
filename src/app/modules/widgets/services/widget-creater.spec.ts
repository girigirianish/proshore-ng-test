import { TestBed, inject } from '@angular/core/testing';

import { WidgetCreaterService } from './widget-creater.service';

describe('WidgetCreaterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WidgetCreaterService]
    });
  });

  it('should be created', inject([WidgetCreaterService], (service: WidgetCreaterService) => {
    expect(service).toBeTruthy();
  }));
});
