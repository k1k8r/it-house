import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public signInForm = this._formBuilder.group({
    email: [''],
    password: [''],
  });

  constructor(private _formBuilder: FormBuilder, private _authService: AuthService) { }

  public ngOnInit(): void {
  }

  public submit(): void {
    this._authService.signIn(this.signInForm.value)
      .subscribe((value) => localStorage.setItem('token', JSON.stringify(value)));
  }

}
