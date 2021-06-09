import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { ISignUp } from '../../interfaces';

@Component({
  selector: 'app-registration-container',
  templateUrl: './registration.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationContainer implements OnDestroy {

  private readonly _destroy$ = new Subject<void>();

  constructor(private _authService: AuthService) { }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public submit(formData: ISignUp): void {
    this._authService.signUp(formData)
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((value) => this._authService.back());
  }

}
