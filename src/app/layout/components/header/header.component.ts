import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {

  public isLogged!: boolean;

  private readonly _destroy$ = new Subject<void>();

  constructor(private _authService: AuthService) {}

  public ngOnInit(): void {
    this._isLoggedIn();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private _isLoggedIn(): void {
    this._authService.isLogged
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((value) => this.isLogged = value);
  }

}
