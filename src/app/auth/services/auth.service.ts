import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Observable } from 'rxjs';
import { pluck, mapTo, map } from 'rxjs/operators';

import { ISignIn, ISignUp } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public get isLogged(): boolean {
    return this.isLoggedIn();
  }

  public token: string | null = '';
  private history: string[] = [];
  private readonly _signInLink = 'api/auth/signin/';
  private readonly _signUpLink = 'api/auth/signup/';

  constructor(
    private _httpClient: HttpClient,
    private _location: Location,
    private _router: Router,
    ) {
    this.token = localStorage.getItem('token');

    this._router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.history.push(event.urlAfterRedirects);
        }
      });
  }

  public signIn(user: ISignIn): Observable<boolean> {
    return this._httpClient.post<{ token: string }>(this._signInLink, user)
      .pipe(
        pluck('token'),
        map((value) => {
          this.token = value;
          localStorage.setItem('token', value);
        }),
        mapTo(true),
      );
  }

  public signUp(user: ISignUp): Observable<boolean> {
    return this._httpClient.post<{ token: string }>(this._signUpLink, user)
      .pipe(
        pluck('token'),
        map((value) => {
          this.token = value;
          localStorage.setItem('token', value);
        }),
        mapTo(true),
      );
  }

  public isLoggedIn(): boolean {
    return !!this.token;
  }

  public back(): void {
    this.history.pop();
    if (this.history.length > 0) {
      this._location.back();
    } else {
      this._router.navigateByUrl('/');
    }
  }

}
