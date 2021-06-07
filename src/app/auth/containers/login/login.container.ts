import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { ISignIn } from '../../interfaces/signin.interface';

@Component({
  selector: 'app-login-container',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss'],
})
export class LoginContainer implements OnInit {

  constructor(private _authService: AuthService) { }

  public ngOnInit(): void {
  }

  public submit(formData: ISignIn): void {
    this._authService.signIn(formData)
      .subscribe((value) => localStorage.setItem('token', JSON.stringify(value)));
  }

}
