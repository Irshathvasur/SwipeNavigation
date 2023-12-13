import { TestBed } from '@angular/core/testing';

import { SwipeNavigationService } from './swipe-navigation.service';

describe('SwipeNavigationService', () => {
  let service: SwipeNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwipeNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
