import { TestBed } from '@angular/core/testing';

import { IsNotLoggedInGuard } from './is-not-logged-in.guard';

describe('IsNotLoggedInGuard', () => {
  let guard: IsNotLoggedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsNotLoggedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
