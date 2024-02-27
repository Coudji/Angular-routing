import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isEvenMinutesGuard } from './is-even-minutes.guard';

describe('isEvenMinutesGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isEvenMinutesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
