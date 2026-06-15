import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { leaveComponentGuard } from './leave-component-guard';

describe('leaveComponentGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => leaveComponentGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
