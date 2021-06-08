import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, pluck, mapTo } from 'rxjs/operators';

import { ISignIn } from '../interfaces/signin.interface';
import { ISignUp } from '../interfaces/signup.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public token: string | null = '';
  private readonly _signInLink = 'api/auth/signin/';
  private readonly _signUpLink = 'api/auth/signup/';

  constructor(private _httpClient: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  public signIn(user: ISignIn): Observable<boolean> {
    return this._httpClient.post<{ token: string }>(this._signInLink, user)
      .pipe(
        pluck('token'),
        tap((value) => {
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
        tap((value) => {
          this.token = value;
          localStorage.setItem('token', value);
        }),
        mapTo(true),
      );
  }

  public isLoggedIn(): boolean {
    return !!this.token;
  }

}
