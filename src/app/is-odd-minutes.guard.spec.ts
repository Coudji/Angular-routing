import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isOddMinutesGuard } from './is-odd-minutes.guard';

describe('isOddMinutesGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isOddMinutesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
