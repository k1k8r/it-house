import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { ISignUp } from '../../interfaces/signup.interface';

@Component({
  selector: 'app-registration-container',
  templateUrl: './registration.container.html',
  styleUrls: ['./registration.container.scss'],
})
export class RegistrationContainer implements OnInit {

  constructor(private _authService: AuthService) { }

  public ngOnInit(): void {
  }

  public submit(formData: ISignUp): void {
    this._authService.signUp(formData)
      .subscribe((value) => this._authService.back());
  }

}
