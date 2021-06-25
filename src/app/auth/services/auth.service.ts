import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Observable, BehaviorSubject } from 'rxjs';
import { pluck, mapTo, map } from 'rxjs/operators';

import { ISignIn, ISignUp } from '../interfaces';

@Injectable()
export class AuthService {

  public get isLogged(): Observable<boolean> {
    return this._isLoggedIn$;
  }

  public get isAuthorized(): boolean {
    return !!this.authToken;
  }

  public authToken: string | null = '';
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private _history: string[] = [];
  private readonly _signInLink = 'api/auth/signin/';
  private readonly _signUpLink = 'api/auth/signup/';

  constructor(
    private _httpClient: HttpClient,
    private _location: Location,
    private _router: Router,
    ) {
    this.authToken = localStorage.getItem('token');

    this._router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this._history.push(event.urlAfterRedirects);
        }
      });
  }

  public signIn(user: ISignIn): Observable<boolean> {
    return this._httpClient.post<{ token: string }>(this._signInLink, user)
      .pipe(
        pluck('token'),
        map((value) => {
          this.authToken = value;
          localStorage.setItem('token', value);
          this._isLoggedIn$.next(true);
        }),
        mapTo(true),
      );
  }

  public signUp(user: ISignUp): Observable<boolean> {
    return this._httpClient.post<{ token: string }>(this._signUpLink, user)
      .pipe(
        pluck('token'),
        map((value) => {
          this.authToken = value;
          localStorage.setItem('token', value);
          this._isLoggedIn$.next(true);
        }),
        mapTo(true),
      );
  }

  public logout(): void {
    this.authToken = '';
    localStorage.removeItem('token');
    this._isLoggedIn$.next(false);
    this._router.navigateByUrl('auth/signin');
  }

  public back(): void {
    this._history.pop();
    if (this._history.length > 0) {
      this._location.back();
    } else {
      this._router.navigateByUrl('/home');
    }
  }

}
