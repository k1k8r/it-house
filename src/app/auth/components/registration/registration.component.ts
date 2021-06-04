import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  public signUpForm = this._formBuilder.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required, Validators.min(3)],
    password_repeat: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder, private _authService: AuthService) { }

  public ngOnInit(): void {
  }

  public signUp(): void {
    this._authService.signUp(this.signUpForm.value)
      .subscribe((value) => value);
  }

}
