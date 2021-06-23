import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { ISignIn } from '../../interfaces';

@Component({
  selector: 'app-login-container',
  templateUrl: './login.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainer implements OnDestroy {

  private readonly _destroy$ = new Subject<void>();

  constructor(private _authService: AuthService) { }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public submit(formData: ISignIn): void {
    this._authService.signIn(formData)
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(() => this._authService.back());
  }

}
