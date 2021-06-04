import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ISignUp } from '../interfaces/signup.interface';
import { ISignIn } from '../interfaces/signin.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly _signInLink = 'api/auth/signin/';
  private readonly _signUpLink = 'api/auth/signup/';

  constructor(private _httpClient: HttpClient) { }

  public signUp(user: ISignUp): Observable<object> {
    return this._httpClient.post(this._signUpLink, user);
  }

  public signIn(user: ISignIn): Observable<object> {
    return this._httpClient.post(this._signInLink, user);
  }

}
